const getStoredUsers = function () {
    const usersJSON = localStorage.getItem('users')

    if (usersJSON !== null) {
        return JSON.parse(usersJSON)
    } else {
        return []
    }
}

const addUser = function (username, password) {
    users.push({
        username: username,
        password: password,
        balance: 0
    })
    localStorage.setItem('users', JSON.stringify(users))

}

const findUser = function () {
    const existingUser = users.find(function (user) {
        return user.username === username && user.password === password;
    })
    return existingUser
}