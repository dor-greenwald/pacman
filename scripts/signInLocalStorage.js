// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MySignInForm');
/* LOAD SAVED DATA
    // Load saved data from localStorage
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPass = localStorage.getItem('password');


    if (savedName) {
        document.getElementById('name').value = savedName;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if (savedPass) {
        document.getElementById('password').value = savedPass;
    }
 */

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const pass = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        // Store input values in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('password', pass);
        localStorage.setItem('email', pass);


        // Optional: Clear form after submission
        form.reset();
        
        // Optional: Display a success message
        alert('Data saved to localStorage!');
    });
});