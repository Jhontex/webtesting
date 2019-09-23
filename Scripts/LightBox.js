/* Este es el código que permite funcionar a el LightBox */

var ArregloSrc = new Array();// Arreglo que contiene los src de cada img
var Control;//Variable encargada de saber el numero de la foto mostrada */

$(function (){
	var ContadorFotos = $("#EnvoltorioImagenes img");
	
	for(var i = ContadorFotos.length-1; i >= 0; i--){
		ArregloSrc[i] = ContadorFotos[i].src;
		ContadorFotos[i].setAttribute("onclick",`LightBox(${i})`);
	}

	return 0;
});

function LightBox(Index){
	$("#LightBox").css({"display":"flex"});
	var CambioSrc = $("#FotoLightBox > img");
	CambioSrc[0].src = ArregloSrc[Index];
	Control = Index;
	return 0;
}

// Función accionada por la flecha izquierda para mostrar foto anterior */

function Izquierda(){
	var CambioSrc = $("#FotoLightBox > img");

	if(Control > 0){
		Control-=1;
		CambioSrc[0].src = ArregloSrc[Control];
	}

	return 0;
}

// Función accionada por la flecha derecha para mostrar foto siguiente */

function Derecha(){
	var CambioSrc = $("#FotoLightBox > img");

	if(Control <  $("#EnvoltorioImagenes img").length-1){
		Control+=1;
		CambioSrc[0].src = ArregloSrc[Control];
	}

	return 0;
}

// Función accionada por el botón cerrar para cerrar el lightBox */

function Cerrar(){$("#LightBox").css({"display":"none"});return 0;}