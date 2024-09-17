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
        password: password
    })
    localStorage.setItem('users', JSON.stringify(users))

}