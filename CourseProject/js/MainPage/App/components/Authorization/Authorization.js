import LocalStorageHandler from "../../../../services/LocalStorageHandler.js";

class Authorization {
    localStorageHandler = new LocalStorageHandler();
    
    isNameValid = false;
    isPasswordValid = false;


    init() {
        document.querySelector('.modalAuthorization_Background').addEventListener('click', this.back.bind(this));

        document.querySelector('.logIn').addEventListener('click', this.open.bind(this));

        document.querySelector('.logIn_burger').addEventListener('click', this.open.bind(this));

        document.querySelector('.inputNameAuthorization').addEventListener('input', this.validationName.bind(this));

        document.querySelector('.inputPasswordAuthorization').addEventListener('input', this.validationPassword.bind(this));

        document.querySelector('.form_Authorization').addEventListener('submit', this.submit.bind(this));
    }

    validationName(event) {
        const user = JSON.parse(this.localStorageHandler.get('user'));
        if(!user) {
            document.querySelector('.mistakeMessageNameAuthorization').textContent = 'There isn\'t such user';
            this.isNameValid = false;
            return;
        }
        if(user.name !== event.target.value) {
            document.querySelector('.mistakeMessageNameAuthorization').textContent = 'There isn\'t such user';
            this.isNameValid = false;
        }
        else {
            document.querySelector('.mistakeMessageNameAuthorization').textContent = '';
            this.isNameValid = true;
        }

        this.checkValidation();
    }

    validationPassword(event) {
        const user = JSON.parse(this.localStorageHandler.get('user'));
        if (!this.isNameValid) {
            document.querySelector('.mistakeMessagePasswordAuthorization').textContent = 'Enter your name';
            this.isPasswordValid = false;
            return;
        }
        if(user.password !== event.target.value) {
            document.querySelector('.mistakeMessagePasswordAuthorization').textContent = 'Incorrect password';
            this.isPasswordValid = false;
        }
        else {
            document.querySelector('.mistakeMessagePasswordAuthorization').textContent = '';
            this.isPasswordValid = true;
            this.passwordValue = event.target.value;
        }

        this.checkValidation();
    }

    checkValidation() {
        if(this.isNameValid && this.isPasswordValid) {
            document.querySelector('.submitAuthorization').disabled = false;
        }
        else {
            document.querySelector('.submitAuthorization').disabled = true;
        }
    }

    open() {
        document.querySelector('.modalAuthorization_Background').classList.add('active');
    }

    clear() {
        document.querySelector('.modalAuthorization_Background').classList.remove('active');
    }

    back(event) {
        if (!event.target.closest('.modalAuthorization')) {
            this.clear();
        }
    }

    clearInputs() {
        document.querySelector('.inputNameAuthorization').value = '';
        document.querySelector('.inputPasswordAuthorization').value = '';
    }

    submit(event) {
        event.preventDefault();

        this.clearInputs();
        this.clear();

        const user = JSON.parse(this.localStorageHandler.get('user'));
        user.isLogined = true;
        this.localStorageHandler.set('user', JSON.stringify(user));

        this.changeTheme(user.theme);
        this.changePage();

        document.querySelector('.submitAuthorization').disabled = true;
    }

    changePage(){
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

    changeTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('darkTheme');
        }
        else {
            document.body.classList.add('darkTheme');
        }
    }
}

export default Authorization;