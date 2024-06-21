// variables referencia DOM
const anios = document.getElementById('year');
const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datoBusqueda = {
    year: '',
    marca: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: ''
}

// eventos
//El evento DOMContentLoaded indica que todo el contenido HTML de la página está listo para ser manipulado con JavaScript.
document.addEventListener("DOMContentLoaded", (e) => {
    mostrarAautos();
    llenarSelect();
});



//eventos listener para los select de busqueda
marca.addEventListener("change", (e) => {
    datoBusqueda.marca = e.target.value;
    console.log(datoBusqueda);
});

anios.addEventListener("change", (e) => {
    datoBusqueda.year = e.target.value;
});

minimo.addEventListener("change", (e) => {
    datoBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
    datoBusqueda.maximo = e.target.value;
});



color.addEventListener("change", (e) => {
    datoBusqueda.color = e.target.value;
});


puertas.addEventListener("change", (e) => {
    datoBusqueda.puertas = e.target.value;
});


transmision.addEventListener("change", (e) => {
    datoBusqueda.transmision = e.target.value;
    console.log(datoBusqueda);
});


//funciones 
function mostrarAautos() {

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.classList.add('fw-bold');
        autoHTML.classList.add('mt-5');
        autoHTML.textContent = `
        Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} -
        Transmisión: ${transmision}
        `;
        // insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        anios.appendChild(option);
    }
}

