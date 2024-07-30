// public/js/login.js

// Get package from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const package = urlParams.get('package');

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        // Redirect to payment.html upon successful login
        window.location.href = `/payment?package=${encodeURIComponent(package)}`;
    } else {
        alert('Error logging in. Please try again.');
    }
});
