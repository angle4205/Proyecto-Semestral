/* Variable del container*/
const container = document.getElementById('container');
/* Variable boton registrarse*/
const registerBtn = document.getElementById('register');
/* Variable boton Iniciar sesion*/
const loginBtn = document.getElementById('login');

var csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

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

function validateUsuario() {
    var user = $('#registerUsername').val();
    if (user.length == 0) {
        return false;
    } else if (user.length > 25) {
        return false;
    } else {
        return true;
    }
}


function iniciarSesion(event) {
    event.preventDefault();
    var messageError = document.getElementById('messageError');
    var errores = '';

    if (!validateCorreo()) {
        errores += '• Correo no válido<br>';
    }

    if (!validatePassword()) {
        errores += '• Contraseña no válida<br>';
    }

    if (errores !== '') {
        messageError.style.display = 'block';
        messageError.innerHTML = errores;
    } else {
        messageError.style.display = 'none';
        
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();
        
        $.ajax({
            url: '{% url "login" %}',
            method: 'POST',
            data: {
                loginUsername: email,
                loginPassword: password
            },
            success: function(response) {
                window.location.href = '{% url "inicio" %}';
            }
        });
    }
}

function registrarse(event) {
    event.preventDefault();
    var messageError = document.getElementById('messageError');
    var errores = '';

    var username = document.getElementById('registerUsername').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    if (username.length === 0 || username.length > 25) {
        errores += '• Usuario no válido<br>';
    }

    if (email.length === 0 || email.length > 25) {
        errores += '• Correo no válido<br>';
    }

    if (password.length === 0 || password.length > 25) {
        errores += '• Contraseña no válida<br>';
    }

    if (errores === '') {
        fetch('/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                loginUsername: username,
                loginPassword: password,
                registerUsername: username,
                registerEmail: email,
                registerPassword: password,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.error === 'username_taken') {
                messageError.style.display = 'block';
                messageError.innerHTML = 'Este nombre de usuario ya está en uso';
            } else if (data.error === 'email_taken') {
                messageError.style.display = 'block';
                messageError.innerHTML = 'Este correo electrónico ya está en uso';
            } else {
                messageError.style.display = 'none';
                document.getElementById('registerForm').submit();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        messageError.style.display = 'block';
        messageError.innerHTML = errores;
    }
}

document.getElementById('registrar').addEventListener('click', registrarse);

