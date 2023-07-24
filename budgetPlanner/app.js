import { alert } from "./components/alert.js";
import { body } from "./components/body.js";
import { footer } from "./components/footer.js";


const root = document.querySelector('#root');

root.append(alert('primary', 'Todo ha ido bien!'));
root.append(body());
root.append(footer(`<h1>Hola clase!</h1>`));
