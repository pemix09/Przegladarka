import Main from './class/Main.js';

let app = new Main();

let button = document.getElementById('button');
button.addEventListener('click',function(){
    app.Generate();
});