const userPassword = document.querySelector('#user-password');
const confirmPassword = document.querySelector('#confirm-password');
const inputGroup = document.querySelector('.password-grouping')

const createAccount = document.querySelector('.createBtn');

createAccount.addEventListener('click', () => {
    let savePassword = userPassword.value;
    let checkSavePassword = confirmPassword.value;

    if (checkPasswordEmpty(userPassword.value, confirmPassword.value)) {
        checkPassword(savePassword, checkSavePassword);
    }
});

function checkPasswordEmpty(userPassword, confirmPassword) {
    const existingError = inputGroup.querySelector('.password-empty-error');
    if (existingError) {
        inputGroup.removeChild(existingError);
    }

    if (userPassword === '' || confirmPassword === '') {
        const passwordEmptyError = document.createElement('div')
        passwordEmptyError.textContent = '* Password cannot be empty';
        passwordEmptyError.className = 'password-empty-error';
        passwordEmptyError.setAttribute ('style', 'margin: 0; padding: 0; font-size: 10px; color: red;');
        shakeScreen();
        inputGroup.appendChild(passwordEmptyError)
        return false;
    }
    return true;
}

function checkPassword(savePassword, checkSavePassword) {
    if (savePassword.length >= 8) {
        if (savePassword === checkSavePassword) {
            alert('Account created')
        } else {
            const passwordEmptyError = document.createElement('div')
            passwordEmptyError.textContent = '* Password does not match';
            passwordEmptyError.className = 'password-empty-error';
            passwordEmptyError.setAttribute ('style', 'margin: 0; padding: 0; font-size: 10px; color: red;');
            shakeScreen();
            inputGroup.appendChild(passwordEmptyError)
            return false;
        }
    } else {
            const passwordEmptyError = document.createElement('div')
            passwordEmptyError.textContent = '* Password must be 8 characters long';
            passwordEmptyError.className = 'password-empty-error';
            passwordEmptyError.setAttribute ('style', 'margin: 0; padding: 0; font-size: 10px; color: red;');
            shakeScreen();
            inputGroup.appendChild(passwordEmptyError)
    }
}




function shakeScreen() {
    const container = document.querySelector('#container');
    container.classList.add('shake');

    
    setTimeout(() => {
        container.classList.remove('shake');
    }, 500);
}