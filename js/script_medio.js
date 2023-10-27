function validarTexto(input) {
	// Obtén el valor actual del input
	let texto = input.value;

	// Reemplaza todos los números por una cadena vacía
	texto = texto.replace(/[0-9]/g, '');
	input.value = texto;
}

// Array de imágenes y sus nombres
const imagenes = [
	{ nombre: "abella", src: "img/fragmentos/abeja.svg" },
	{ nombre: "esquirol", src: "img/fragmentos/ardilla.svg" },
	{ nombre: "cocodril", src: "img/fragmentos/cocodrilo.svg" },
	{ nombre: "conill", src: "img/fragmentos/conejo.svg" },
	{ nombre: "panda", src: "img/fragmentos/panda.svg" },
	{ nombre: "serp", src: "img/fragmentos/serpiente.svg" },
	{ nombre: "girafa", src: "img/fragmentos/jirafa.svg" },
	{ nombre: "lloro", src: "img/fragmentos/loro.svg" },
	{ nombre: "marieta", src: "img/fragmentos/mariquita.svg" },
	{ nombre: "mico", src: "img/fragmentos/mono.svg" },
	{ nombre: "ratpenat", src: "img/fragmentos/murcielago.svg" },
	{ nombre: "ovella", src: "img/fragmentos/oveja.svg" },
	{ nombre: "ànec", src: "img/fragmentos/pato.svg" },
	{ nombre: "mandrós", src: "img/fragmentos/perezoso.svg" },
	{ nombre: "porcespin", src: "img/fragmentos/puercoespin.svg" },
	{ nombre: "cérvol", src: "img/fragmentos/venado.svg" },
	{ nombre: "zebra", src: "img/fragmentos/zebra.svg" },
	{ nombre: "pingüí", src: "img/fragmentos/pinguino.svg" },
	{ nombre: "gallina", src: "img/fragmentos/gallina.svg" },
	{ nombre: "tortuga", src: "img/fragmentos/tortuga.svg" },
	{ nombre: "gamba", src: "img/fragmentos/gamba.svg" },
	{ nombre: "porc", src: "img/fragmentos/cerdo.svg" },
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