//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


let $datos = document.querySelector('#enviar-datos');

let $titulo = document.querySelector('h1');

let $info = document.querySelector('p');

$datos.onclick = function() {
    const primerNombreUsuario = document.querySelector('#primer-nombre').value.toLowerCase();
    const segundoNombreUsuario = document.querySelector('#segundo-nombre').value.toLowerCase();
    const apellidoUsuario = document.querySelector('#apellido').value.toLowerCase();
    const edadUsuario = document.querySelector('#edad').value;
    
    
    $titulo.textContent = `Bienvenido,  ${primerNombreUsuario[0].toUpperCase()}${primerNombreUsuario.substring(1)}!`;
    $info.textContent = `Los datos son: ${primerNombreUsuario[0].toUpperCase()}${primerNombreUsuario.substring(1)}, 
    ${segundoNombreUsuario[0].toUpperCase()}${segundoNombreUsuario.substring(1)}, ${apellidoUsuario[0].toUpperCase()}${apellidoUsuario.substring(1)}, ${edadUsuario}.`
    
    return false;
}

