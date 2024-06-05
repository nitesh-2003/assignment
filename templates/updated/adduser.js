document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the user input
        const userName = event.target.name.value;

        // Create a new div element to represent the user
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.textContent = userName;

        // Append the new user div to the user list
        userList.appendChild(userDiv);

        // Clear the input field
        event.target.name.value = '';
    });
});
