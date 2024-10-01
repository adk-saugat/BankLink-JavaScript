const users = getStoredUsers()

const user = users.find((user) => user.userID === location.hash.substring(1))
if (user) {
    document.querySelector('#accountBalance').textContent = `$${user.balance}`
}

document.querySelector('#transferBtn').addEventListener('click', (e) => {
    const container = document.querySelector('#transferField')
    const accountInfo = document.createElement('input')
    accountInfo.setAttribute('type', 'text')

    container.appendChild(accountInfo)
})

