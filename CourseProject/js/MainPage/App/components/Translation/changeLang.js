import { translate } from "../../../../../assets/translate/translate.js";

class ChangeLang {
    init() {
        document.querySelector('.changeLang').addEventListener('click', this.toggleLang.bind(this));
    }

    toggleLang() {
        if(document.querySelector('.changeLang').textContent === 'en') {
            document.querySelector('.changeLang').textContent = 'ru';
            this.changeLang('ru');
        }
        else {
            document.querySelector('.changeLang').textContent = 'en';
            this.changeLang('en');
        }
    }

    changeLang(lang) {
        const translation = translate[lang];

        const elements = document.querySelectorAll('[data-i18]');

        elements.forEach((element) => {
            const key = element.getAttribute('data-i18');
            const translatedText = translation[key];

            element.textContent = translatedText;
        });
    }
}

export default ChangeLang;
