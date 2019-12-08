import App from './src/App';

let app = new App();
document.onselect = function (e) {
    e.preventDefault();
    e.stopPropagation();
}


document.body.appendChild(app.ref);