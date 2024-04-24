import BurgerMenu from './components/BurgerMenu.js';
import Slider from './components/Slider.js';
import ChangeTheme from './components/changeTheme.js';

class App {
    init() {
        const burgerMenu = new BurgerMenu();
        burgerMenu.init();

        const slider = new Slider();
        slider.init();

        const changeTheme = new ChangeTheme();
        changeTheme.init();
    }
}

export default App;
