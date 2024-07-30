// public/js/signup.js

// Get package from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const package = urlParams.get('package');

document.getElementById('package').value = package;

document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, package })
    });

    if (response.ok) {
        // Redirect to payment.html upon successful signup
        window.location.href = `/payment?package=${encodeURIComponent(package)}`;
    } else {
        alert('Error signing up. Please try again.');
    }
});
