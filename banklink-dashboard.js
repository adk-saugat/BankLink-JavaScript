const users = getStoredUsers()
let accountInfo, transferAmount
const user = users.find((user) => user.userID === location.hash.substring(1))
if (user) {
    document.querySelector('#accountBalance').textContent = `$${user.balance}`
}

document.querySelector('#transferContainer').addEventListener('submit', (e) => {
    e.preventDefault()
    accountInfo = e.target.elements.accountInfo.value
    transferAmount = e.target.elements.transferAmount.value

    console.log(accountInfo)
    console.log(transferAmount)
})
