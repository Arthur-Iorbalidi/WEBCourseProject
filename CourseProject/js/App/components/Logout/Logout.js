class Logout {
    init() {
        document.querySelector('.logout').addEventListener('click', this.logout.bind(this));

        document.querySelector('.logout_burger').addEventListener('click', this.logout.bind(this));
    }

    logout() {
        this.changePage();
    }

    changePage() {
        document.querySelector('.logIn').classList.remove('hidden');
        document.querySelector('.logIn_burger').classList.remove('hidden');
        document.querySelector('.sighIn').classList.remove('hidden');
        document.querySelector('.sighIn_burger').classList.remove('hidden');

        document.querySelector('.logout').classList.add('hidden');
        document.querySelector('.logout_burger').classList.add('hidden');

        document.querySelectorAll('.open').forEach((elem) => {
            elem.classList.add('hidden');
        });
    }
}

export default Logout;