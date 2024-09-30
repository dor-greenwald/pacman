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

        var nameIsExist = localStorage.getItem(name);


        const userData = {
            password: pass,
            email:email,
            score:0
            // Add other user-specific data here if needed
        };


        if (nameIsExist === null) {
            localStorage.setItem(name, JSON.stringify(userData));
            alert('Signed in succefully!');
        }
        else {
            alert("User name alreday exist, try another.")
        }

        // Optional: Clear form after submission
        form.reset();
        
    
    });
});