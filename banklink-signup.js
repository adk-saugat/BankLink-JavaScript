const users = getStoredUsers()
let username, password

document.querySelector('#signupWrapper').addEventListener('submit', function (e) {
    e.preventDefault()
    username = e.target.elements.signupUsernameField.value
    password = e.target.elements.signupPasswordField.value

    const findUsername = users.find(function (user) {
        return username === user.username
    })

    const findPassword = users.find(function (user) {
        return password === user.password
    })

    if (findUsername === username && findPassword === password) {
        console.log('You dont have to signup')
    } else {
        addUser(username, password)
        console.log('Signed up')
    }
})


