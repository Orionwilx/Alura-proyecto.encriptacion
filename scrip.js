const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const men = document.getElementById('mensaje');
const btnCopiar = document.getElementById('boton-copiar');

function botonEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = '';
	mensaje.style.backgorunImage = 'none';
}
function botonDesencriptar() {
	const textDesencriptado = desecriptar(textArea.value);
	mensaje.value = textDesencriptado;
	textArea.value = '';
	mensaje.style.backgorunImage = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
	btnCopiar.addEventListener('click', copiarTexto);
});

// function botoncopiar(){
//     copiar(mensaje);
// }

// Funcion para encriptar los mensajes
function encriptar(stringEncriptada) {
	//Matriz que contiene las letras a reemplazar y convertimos todo el texto recibido a minisculas
	let matrizCodigo = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'obes'],
		['u', 'ufat'],
	];
	stringEncriptada = stringEncriptada.toLowerCase();

	//ciclo for para reemplazar todas las letras en nuestra matriz
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}

	return stringEncriptada;
}

function desecriptar(stringDesencriptada) {
	let matrizCodigo = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'obes'],
		['u', 'ufat'],
	];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}

	return stringDesencriptada;
}

function copiarTexto(e) {
	e.preventDefault();
	const mensaje = men.value;
	navigator.clipboard.writeText(mensaje);
}
