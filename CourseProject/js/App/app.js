import Authorization from './components/Authorization/Authorization.js';
import Logout from './components/Logout/Logout.js';
import BurgerMenu from './components/MainPage/BurgerMenu.js';
import Slider from './components/MainPage/Slider.js';
import ChangeTheme from './components/MainPage/changeTheme.js';
import ValidationRegistration from './components/Registration/ValidationRegistration.js';
import ChangeLang from './components/Translation/changeLang.js';

class App {
    init() {
        const burgerMenu = new BurgerMenu();
        burgerMenu.init();

        const slider = new Slider();
        slider.init();

        const changeTheme = new ChangeTheme();
        changeTheme.init();

        const validationRegistration = new ValidationRegistration();
        validationRegistration.init();

        const authorization = new Authorization();
        authorization.init();

        const logout = new Logout();
        logout.init();

        const changeLang = new ChangeLang();
        changeLang.init();
    }
}

export default App;
