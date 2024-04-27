import LocalStorageHandler from "../../../../services/LocalStorageHandler.js";

class ValidationRegistration {
    localStorageHandler = new LocalStorageHandler();
    namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]{3,}$/;
    numberPattern = /^\+375\d{9}$/;
    emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    isNameValid = false;
    isNumberValid = false;
    isEmailValid = false;
    isPasswordValid = false;

    nameValue = '';
    numberValue = '';
    emailValue = '';
    passwordValue = '';


    init() {
        document.querySelector('.modalRegister_Background').addEventListener('click', this.back.bind(this));

        document.querySelector('.sighIn').addEventListener('click', this.open.bind(this));

        document.querySelector('.inputName').addEventListener('input', this.validationName.bind(this));

        document.querySelector('.inputNumber').addEventListener('input', this.validationNumber.bind(this));

        document.querySelector('.inputEmail').addEventListener('input', this.validationEmail.bind(this));

        document.querySelector('.inputPassword').addEventListener('input', this.validationPassword.bind(this));

        document.querySelector('.form_Register').addEventListener('submit', this.submit.bind(this));
    }

    validationName(event) {
        if(!this.namePattern.test(event.target.value)) {
            document.querySelector('.mistakeMessageName').textContent = 'Min length: 3. Shuoldn\'t contain numbers and special symbols';
            this.isNameValid = false;
        }
        else {
            document.querySelector('.mistakeMessageName').textContent = '';
            this.isNameValid = true;
            this.nameValue = event.target.value;
        }

        this.checkValidation();
    }

    validationNumber(event) {
        if(!this.numberPattern.test(event.target.value)) {
            document.querySelector('.mistakeMessageNumber').textContent = 'Number should be belorussian and starts with +';
            this.isNumberValid = false;
        }
        else {
            document.querySelector('.mistakeMessageNumber').textContent = '';
            this.isNumberValid = true;
            this.numberValue = event.target.value;
        }

        this.checkValidation();
    }

    validationEmail(event) {
        if(!this.emailPattern.test(event.target.value)) {
            document.querySelector('.mistakeMessageEmail').textContent = 'It should be email';
            this.isEmailValid = false;
        }
        else {
            document.querySelector('.mistakeMessageEmail').textContent = '';
            this.isEmailValid = true;
            this.emailValue = event.target.value;
        }

        this.checkValidation();
    }

    validationPassword(event) {
        if(!this.passwordPattern.test(event.target.value)) {
            document.querySelector('.mistakeMessagePassword').textContent = 'Min length: 8. Max: 20. Should contain at least one one uppercase letter, one lowercase letter, one number and one special character';
            this.isPasswordValid = false;
        }
        else {
            document.querySelector('.mistakeMessagePassword').textContent = '';
            this.isPasswordValid = true;
            this.passwordValue = event.target.value;
        }

        this.checkValidation();
    }

    checkValidation() {
        if(this.isNameValid && this.isNumberValid && this.isEmailValid && this.isPasswordValid) {
            document.querySelector('.submitRegistration').disabled = false;
        }
        else {
            document.querySelector('.submitRegistration').disabled = true;
        }
    }

    open() {
        document.querySelector('.modalRegister_Background').classList.add('active');
    }

    clear() {
        document.querySelector('.modalRegister_Background').classList.remove('active');
    }

    back(event) {
        if (!event.target.closest('.modalRegister')) {
            this.clear();
        }
    }

    clearInputs() {
        document.querySelector('.inputName').value = '';
        document.querySelector('.inputNumber').value = '';
        document.querySelector('.inputEmail').value = '';
        document.querySelector('.inputPassword').value = '';
    }

    submit(event) {
        event.preventDefault();

        const user = {
            name: this.nameValue,
            number: this.numberValue,
            email: this.emailValue,
            password: this.passwordValue,
            isLogined: true,
        }

        this.localStorageHandler.set('user', JSON.stringify(user));

        this.clearInputs();
        this.clear();

        this.changePage();

        document.querySelector('.submitRegistration').disabled = true;
    }

    changePage() {
        document.querySelector('.logIn').classList.add('hidden');
        document.querySelector('.logIn_burger').classList.add('hidden');
        document.querySelector('.sighIn').classList.add('hidden');
        document.querySelector('.sighIn_burger').classList.add('hidden');

        document.querySelector('.logout').classList.remove('hidden');
        document.querySelector('.logout_burger').classList.remove('hidden');

        document.querySelectorAll('.open').forEach((elem) => {
            elem.classList.remove('hidden');
        });
    }
}

export default ValidationRegistration;