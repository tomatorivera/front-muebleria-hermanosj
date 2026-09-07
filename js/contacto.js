import "./badge.js";

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!validarFormulario(nombre, email, mensaje)) return;

    mostrarMensajeExito();
    formulario.reset();
});

function validarFormulario(nombre, email, mensaje) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nombre || !email || !mensaje) {
        mostrarError('Completá todos los campos.');
        return false;
    }

    if (!emailValido) {
        mostrarError('Ingresá un email válido.');
        return false;
    }

    return true;
}

function mostrarError(texto) {
    let aviso = document.getElementById('form-aviso');
    if (!aviso) {
        aviso = document.createElement('p');
        aviso.id = 'form-aviso';
        formulario.appendChild(aviso);
    }
    aviso.className = 'form-error';
    aviso.textContent = texto;
}

function mostrarMensajeExito() {
    let aviso = document.getElementById('form-aviso');
    if (!aviso) {
        aviso = document.createElement('p');
        aviso.id = 'form-aviso';
        formulario.appendChild(aviso);
    }
    aviso.className = 'form-success';
    aviso.textContent = '¡Gracias! Te vamos a responder a la brevedad.';
}