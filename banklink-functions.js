const getStoredUsers = function () {
    const usersJSON = localStorage.getItem('users')

    if (usersJSON !== null) {
        return JSON.parse(usersJSON)
    } else {
        return []
    }
}

const addUser = function (username, password) {
    let userID = crypto.randomUUID()
    users.push({
        userID: userID,
        accountNumber: generateAccountNumber(),
        username: username,
        password: password,
        balance: 0,
    })
    localStorage.setItem('users', JSON.stringify(users))

}

const findUser = function (username, password) {
    return users.find((user) => user.username === username && user.password === password)
}

const getUserID = (existingUser) => {
    return users.find((user) => user.username === existingUser.username) ? existingUser.userID : ''
}

function generateAccountNumber() {
    // Generate a random number between 1e9 and 1e10-1 to ensure it's 10 digits
    let randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber;
}