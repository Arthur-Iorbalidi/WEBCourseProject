import LocalStorageHandler from "../../../../services/LocalStorageHandler.js";

class Account {
    localStorageHandler = new LocalStorageHandler();

    init() {
        document.querySelectorAll('.open').forEach((elem) => {
            elem.addEventListener('click', this.open.bind(this));
        });

        document.querySelector('.modalAccount_Background').addEventListener('click', this.back.bind(this));
        document.querySelector('.cross_account').addEventListener('click', this.close.bind(this));

        this.fillData();
    }

    open() {
        document.querySelector('.modalAccount_Background').classList.add('active');
    }

    back(event) {
        if (!event.target.closest('.modalAccount')) {
            this.close();
        }
    }

    close() {
        document.querySelector('.modalAccount_Background').classList.remove('active');
    }

    fillData() {
        const user = JSON.parse(this.localStorageHandler.get('user'));

        document.querySelector('.account_name').textContent = user.name;
        document.querySelector('.account_number').textContent = user.number;
        document.querySelector('.account_email').textContent = user.email;
        document.querySelector('.account_password').textContent = user.password;
    }
}

export default Account;