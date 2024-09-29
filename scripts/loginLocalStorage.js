// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MyLoginForm');
 
    // Load saved data from localStorage
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get user input values
        const nameInput = document.getElementById('name').value;
        const passwordInput = document.getElementById('password').value;

        // Retrieve stored data from localStorage
        const storedName = localStorage.getItem('name');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered credentials match the stored ones
        if (nameInput === storedName && passwordInput === storedPassword) {
            alert('Sign in successful!');
            // Proceed with the login (e.g., redirect to another page)
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });


/*
    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const pass = document.getElementById('password').value;

        // Store input values in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('password', pass);


        // Optional: Clear form after submission
        form.reset();
        
        // Optional: Display a success message
        alert('Data saved to localStorage!');
    });
    */
});