const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { User } = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/combined.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'combined.html'));
});

app.post('/signup', async (req, res) => {
    const { name, email, package } = req.body;

    try {
        // Create a new user
        const user = await User.create({ name, email, package });
        // Redirect to payment page upon successful signup
        res.redirect('/payment');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up. Please try again.');
    }
});

app.post('/login', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (user) {
            // Redirect to payment page upon successful login
            res.redirect('/payment');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in. Please try again.');
    }
});

app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'payment.html'));
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
