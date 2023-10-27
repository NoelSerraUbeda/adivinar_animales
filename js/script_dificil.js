function validarTexto(input) {
	// Obtén el valor actual del input
	let texto = input.value;

	// Reemplaza todos los números por una cadena vacía
	texto = texto.replace(/[0-9]/g, '');
	input.value = texto;
}

// Array de imágenes y sus nombres
const imagenes = [
	{ nombre: "cangur", src: "img/sombras/canguro.svg" },
	{ nombre: "castor", src: "img/sombras/castor.svg" },
	{ nombre: "porc", src: "img/sombras/cerdo.svg" },
	{ nombre: "cocodril", src: "img/sombras/cocodrilo.svg" },
	{ nombre: "conill", src: "img/sombras/conejo.svg" },
	{ nombre: "girafa", src: "img/sombras/jirafa.svg" },
	{ nombre: "lleó", src: "img/sombras/leon.svg" },
	{ nombre: "os rentador", src: "img/sombras/mapache.svg" },
	{ nombre: "mico", src: "img/sombras/mono.svg" },
	{ nombre: "ratpenat", src: "img/sombras/murcielago.svg" },
	{ nombre: "ornitorrinc", src: "img/sombras/ornitorrinco.svg" },
	{ nombre: "os", src: "img/sombras/oso.svg" },
	{ nombre: "ovella", src: "img/sombras/oveja.svg" },
	{ nombre: "ànec", src: "img/sombras/pato.svg" },
	{ nombre: "mandrós", src: "img/sombras/perezoso.svg" },
	{ nombre: "pingüí", src: "img/sombras/pinguino.svg" },
	{ nombre: "granota", src: "img/sombras/rana.svg" },
	{ nombre: "tigre", src: "img/sombras/tigre.svg" },
	{ nombre: "llop", src: "img/sombras/lobo.svg" },
	{ nombre: "koala", src: "img/sombras/koala.svg" },
	{ nombre: "cérvol", src: "img/sombras/venado.svg" },

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
	if (nombreIngresado == nombreImagenActual) {
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