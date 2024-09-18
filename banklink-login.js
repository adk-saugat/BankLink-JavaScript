const users = getStoredUsers()

document.querySelector('#loginContainer').addEventListener('submit', function (e) {
    e.preventDefault()
    username = e.target.elements.loginUsernameField.value
    password = e.target.elements.loginPasswordField.value

    // console.log(username)
    // console.log(password)

    const existingUser = findUser()

    if (existingUser) {
        location.assign('/dashboard.html')
    } else {
        e.target.elements.loginUsernameField.value = ''
        e.target.elements.loginPasswordField.value = ''
        //console.log('Your username and password does not match!')
        const loginFailed = document.createElement('div')
        loginFailed.textContent = 'Your username and password does not match. Try Again!'
        document.querySelector('#failedWrapper').appendChild(loginFailed)
    }
})
