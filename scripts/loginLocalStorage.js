// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MyLoginForm');
    let currentUser = ""
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
                currentUser = nameInput;
                localStorage.setItem("current user",currentUser);

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


    function displayPassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
});