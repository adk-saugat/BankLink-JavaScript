const getStoredUsers = function () {
    const usersJSON = localStorage.getItem('users')

    if (usersJSON !== null) {
        return JSON.stringify(usersJSON)
    } else {
        return []
    }
}