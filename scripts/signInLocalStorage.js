// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MySignInForm');


    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const pass = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        const userData = {
            password: pass,
            email:email
            // Add other user-specific data here if needed
        };
        localStorage.setItem(name, JSON.stringify(userData));

        // Optional: Clear form after submission
        form.reset();
        
        // Optional: Display a success message
        alert('Data saved to localStorage!');
    });
});