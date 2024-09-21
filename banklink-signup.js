const users = getStoredUsers()
let username, password

document.querySelector('#signupWrapper').addEventListener('submit', function (e) {
    e.preventDefault()
    username = e.target.elements.signupUsernameField.value
    password = e.target.elements.signupPasswordField.value

    // Check if the username already exists
    const existingUser = findUser()
    if (existingUser) {
        console.log('You already have an account. No need to sign up again.');

        const returnWrapper = document.createElement('div')
        const loginReturn = document.createElement('span')

        loginReturn.textContent = 'You already have an account. Go to Login!'

        returnWrapper.appendChild(loginReturn)
        document.querySelector('#loginReturn').appendChild(returnWrapper)
    } else {
        addUser(username, password);
        console.log('Signed up successfully.');
        location.assign('/login-page.html')
    }
})


