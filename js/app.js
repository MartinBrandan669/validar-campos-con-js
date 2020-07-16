// VARIABLES //
const btn = document.getElementById('btn');
const verPass = document.querySelector('span');


// EVENT LISTENERS //
eventListeners();

function eventListeners() {
    btn.addEventListener('click', enviar);
    verPass.addEventListener('click', mostrar);

}

// FUNCIONES //

function enviar(e) {
    e.preventDefault();
}

function mostrar(e) {
    console.log(e);



    // document.getElementById('password').setAttribute('type', 'text');
    // verPass.textContent = 'Ocultar';

    // document.getElementById('password').setAttribute('type', 'password');
    // verPass.textContent = 'Mostrar';

}