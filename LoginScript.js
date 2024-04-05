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