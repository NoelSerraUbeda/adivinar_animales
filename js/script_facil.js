function validarTexto(input) {
	// Obtén el valor actual del input
	let texto = input.value;

	// Reemplaza todos los números por una cadena vacía
	texto = texto.replace(/[0-9]/g, '');
	input.value = texto;
}

// Array de imágenes y sus nombres
const imagenes = [
	{ nombre: "esquirol", src: "img/color/ardilla.svg" },
	{ nombre: "mussol", src: "img/color/buho.svg" },
	{ nombre: "cavall", src: "img/color/caballo.svg" },
	{ nombre: "caragol", src: "img/color/caracol.svg" },
	{ nombre: "castor", src: "img/color/castor.svg" },
	{ nombre: "cangur", src: "img/color/canguro.svg" },
	{ nombre: "porc", src: "img/color/cerdo.svg" },
	{ nombre: "conill", src: "img/color/conejo.svg" },
	{ nombre: "gamba", src: "img/color/gamba.svg" },
	{ nombre: "girafa", src: "img/color/jirafa.svg" },
	{ nombre: "koala", src: "img/color/koala.svg" },
	{ nombre: "lleó", src: "img/color/leon.svg" },
	{ nombre: "serp", src: "img/color/serpiente.svg" },
	{ nombre: "cocodril", src: "img/color/cocodrilo.svg" },
	{ nombre: "lloro", src: "img/color/loro.svg" },
	{ nombre: "cranc", src: "img/color/cangrejo.svg" },
	{ nombre: "peix", src: "img/color/pez.svg" },
	{ nombre: "ratpenat", src: "img/color/murcielago.svg" },
	{ nombre: "gallina", src: "img/color/gallina.svg" },
	{ nombre: "abella", src: "img/color/abeja.svg" },
	{ nombre: "mandrós", src: "img/color/perezoso.svg" },
	{ nombre: "ca", src: "img/color/perro.svg" },
	{ nombre: "panda", src: "img/color/panda.svg" },
	{ nombre: "granota", src: "img/color/rana.svg" },
	{ nombre: "ratolí", src: "img/color/raton.svg" },
];

const imagenContainer = document.getElementById('imagen-container');
const imagenElement = document.getElementById('imagen');
const mensajeElement = document.getElementById('mensaje');
const nombreInput = document.getElementById('nombre-imagen');

let imagenActual = null;

function mostrarImagenAlAzar() {
	let nuevaImagen = imagenActual;
	while (nuevaImagen === imagenActual) {
		nuevaImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
	}
	imagenActual = nuevaImagen;
	imagenElement.src = nuevaImagen.src;
	imagenElement.alt = nuevaImagen.nombre;
}

function verificarNombre() {
	const nombreIngresado = nombreInput.value.trim().toLowerCase();
	const nombreImagenActual = imagenActual.nombre.toLowerCase();
	if (nombreIngresado == "palmaweb vi" || nombreIngresado == "palmawebvi" || nombreIngresado == "palmawebv"|| nombreIngresado == "palmaweb v") {
        alert("Los mejores Ò_Ó")
    }
	if (nombreIngresado === nombreImagenActual) {
		mensajeElement.textContent = 'Molt be!';
		mensajeElement.style.display = 'block';

		setTimeout(() => {
			mensajeElement.style.display = 'none';
			nombreInput.value = '';
			mostrarImagenAlAzar();
		}, 1000);
	} else {
		mensajeElement.textContent = 'Aquest no es';
		mensajeElement.style.display = 'block';

		setTimeout(() => {
			mensajeElement.style.display = 'none';
		}, 1000);
	}
}

nombreInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		verificarNombre();
	}
});

mostrarImagenAlAzar();