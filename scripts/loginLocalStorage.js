// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MyLoginForm');

    // Load saved data from localStorage
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get user input values
        const nameInput = document.getElementById('name').value;
        const passwordInput = document.getElementById('password').value;

        const storedUserData = localStorage.getItem(nameInput); // Use nameInput as the key


        if (storedUserData) {
            const userData = JSON.parse(storedUserData); // Parse the JSON string to an object

            // Check if the entered password matches the stored one
            if (passwordInput === userData.password) {
                alert('Sign in successful!');
                // Proceed with the login (e.g., redirect to another page)
            }
            else {
                alert('Invalid password. Please try again.');
            }
        } else {
            alert('User not found. Please register.');
        }
    });



});