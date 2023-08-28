//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaNumeros = document.querySelectorAll('li');

const $promedio = document.querySelector('#promedio');

const $numeroMasPequeno = document.querySelector('#numero-mas-pequeno');

const $numeroMasGrande = document.querySelector('#numero-mas-grande');

const $numeroMasFrecuente = document.querySelector('#numero-mas-frecuente');

const $calcularDatos = document.querySelector('#calcular-datos');

const listaDeNumeros = [];

$listaNumeros.forEach((contenido) => {
    const contenidoLista = parseFloat(contenido.textContent);
    listaDeNumeros.push(contenidoLista);
});


function calcularPromedio(listaDeNumeros) {
    let promedioLista = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        promedioLista = promedioLista + listaDeNumeros[i];       
    }
    return promedioLista / listaDeNumeros.length;
}

function calcularNumeroMasPequeno(listaDeNumeros) {
    let numeroMasPequeno = listaDeNumeros[0];
    for (let i = 0; i < listaDeNumeros.length; i++) {
            if (listaDeNumeros[i] < numeroMasPequeno) {
                numeroMasPequeno = listaDeNumeros[i];
            }
    }
    return numeroMasPequeno;
}

function calcularNumeroMasGrande(listaDeNumeros) {
    let numeroMasGrande = listaDeNumeros[0];
    for (let i = 0; i < listaDeNumeros.length; i++) {
            if (listaDeNumeros[i] > numeroMasGrande) {
                numeroMasGrande = listaDeNumeros[i];
            }
    }
    return numeroMasGrande;
}

function calcularNumeroMasFrecuente(listaDeNumeros) {
    let numeroMasFrecuente = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        for (let j = i + 1; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[i] === listaDeNumeros[j] && !numeroMasFrecuente.includes(listaDeNumeros[i])) {
                numeroMasFrecuente.push(listaDeNumeros[i]);
            }
        }
    }
    return numeroMasFrecuente;
}

$calcularDatos.onclick = function() {
    $promedio.textContent = `El promedio es: ${calcularPromedio(listaDeNumeros)}`;
    $numeroMasPequeno.textContent = `El número más pequeño es: ${calcularNumeroMasPequeno(listaDeNumeros)}`;
    $numeroMasGrande.textContent = `El número más grande es: ${calcularNumeroMasGrande(listaDeNumeros)}`;
    $numeroMasFrecuente.textContent = `El número más frecuente es: ${calcularNumeroMasFrecuente(listaDeNumeros)}`;

    return false;
}
