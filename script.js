const userPassword = document.querySelector('#user-password');
const confirmPassword = document.querySelector('#confirm-password');

const createAccount = document.querySelector('.createBtn');

createAccount.addEventListener('click', () => {
    let savePassword = userPassword.value;
    let checkSavePassword = confirmPassword.value;

    if (checkPasswordEmpty(userPassword, confirmPassword)) {
        checkPassword(savePassword, checkSavePassword);
    }
})

function checkPasswordEmpty(userPassword, confirmPassword) {
    if (userPassword == '' || confirmPassword == '') {
        console.log('password cannot be empty')
        return false;
    }
}

function checkPassword(savePassword, checkSavePassword) {
    if (savePassword.length >= 8) {
        if (savePassword === checkSavePassword) {
            console.log('passwords match')
        } else {
            console.log('passwords do not match')
        }
        console.log('password length is greater than or equal to 8')
    } else {
        console.log('Password is not long enough')
        console.log('Password does not match')
    }
}