const users = getStoredUsers()
let username, password

document.querySelector('#signupWrapper').addEventListener('submit', function (e) {
    e.preventDefault()
    username = e.target.elements.signupUsernameField.value
    password = e.target.elements.signupPasswordField.value

    // Check if the username already exists
    const existingUser = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (existingUser) {
        console.log('You already have an account. No need to sign up again.');

        const returnWrapper = document.createElement('div')
        const loginReturn = document.createElement('span')
        const loginLink = document.createElement('a')

        loginReturn.textContent = 'You already have an account.'
        loginLink.textContent = 'Go to Login.'
        loginLink.setAttribute('href', '/login-page.html')

        returnWrapper.appendChild(loginReturn)
        returnWrapper.appendChild(loginLink)

        document.querySelector('#loginReturn').appendChild(returnWrapper)
    } else {
        addUser(username, password);
        console.log('Signed up successfully.');
    }
})


