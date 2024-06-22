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
    mostrarAautos(autos);
    llenarSelect();
});



//eventos listener para los select de busqueda
marca.addEventListener("change", (e) => {
    datoBusqueda.marca = e.target.value;
    console.log(datoBusqueda);
    filtrarAuto();//filtrar autos
});

anios.addEventListener("change", (e) => {
    datoBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener("change", (e) => {
    datoBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener("change", (e) => {
    datoBusqueda.maximo = e.target.value;
    filtrarAuto();
});



color.addEventListener("change", (e) => {
    datoBusqueda.color = e.target.value;
    filtrarAuto();
});


puertas.addEventListener("change", (e) => {
    datoBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});


transmision.addEventListener("change", (e) => {
    datoBusqueda.transmision = e.target.value;
    filtrarAuto();
    console.log(datoBusqueda);
});


//funciones 
function mostrarAautos(autos) {
    limpiarHTML();

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

// limpiar Html para que no se duplique la busqueda

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
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


// funcion filtrar en base a la busqueda 
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarAnio).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTrasmicion).filter(filtrarColor);

    //en caso de no haber registro mandar mensaje por pantalla
    if (resultado.length) {
        console.log(resultado)
        mostrarAautos(resultado);
    } else {
        noResultado();
    }

}
// mensaje de no resultado
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alert', 'alert-danger', 'fw-bold', 'h5');
    noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datoBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarAnio(auto) {
    const { year } = datoBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datoBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    const { maximo } = datoBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datoBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTrasmicion(auto) {

    const { transmision } = datoBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datoBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}