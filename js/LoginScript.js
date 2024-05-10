/* Variable del container*/
const container = document.getElementById('container');
/* Variable boton registrarse*/
const registerBtn = document.getElementById('register');
/* Variable boton Iniciar sesion*/
const loginBtn = document.getElementById('login');

/* 
EventListener x2 para cada boton
classList.add para añadir "active" a la clase html de container
classList.remove para remover el mismo string de la misma clase
*/

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validateCorreo(){
    var email = $('#loginEmail').val();
    if (email.length == 0) {  
        return false;
    }
    if (email.length > 25) {
        return false;
    }
    return true;
}

function validatePassword() {
    var password = $('#loginPassword').val();
    
    if (password.length == 0) {
        return false;
    } else if (password.length > 25) {
        return false;
    } else {
        return true;
    }

}


function iniciarSesion(event) {
    event.preventDefault();
    var messageError = document.getElementById('messageError');
    var validado = true;
    var errores = '';

    if (!validateCorreo()) {
        errores = errores + '• Correo invalido ' + "<br>";

        validado = false;
    }

    if (!validatePassword()) {
        errores = errores + '• Contraseña invalida' + "<br>";

        validado = false;
    }

    if (!validado) {
        messageError.style.display = 'block';
        messageError.innerHTML = errores;
    }

}

function registrarse(event) {
    event.preventDefault();
    var messageError = $('messageError').val;

}
