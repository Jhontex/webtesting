/* Aquí va todo el código javascript que hace funcionar al slider ; Este código depende de la librería jquery,
por lo tanto si se elimina la libreria ya no servirá*/

/*Cabe aclarar que todo el estilo gráfico del slider junto a sus botones fueron declaradas en el archivo "Slider.css"
;En este script solo se manejan las animaciones y las transiciones del slider*/


/* El siguiente fragmento de jquery es el responsable de activar el slider en si,invoca la funcion "GenerarBotones" para
crear y mostrar en pantalla los botones del slider de forma dinámica;Invoca la función "Push(0)" para ejecutar la animación
del primer boton del slider al entrar a la página;Se utiliza un "SetInterval" que a su vez invoca la función "Transición"
cada 9s para realizar la transición de una imagen a otra o de una diapositiva a otra*/

$("#Slider img").ready(function (){
	GenerarBotones();//Función responsable de crear dinámicamente los botones del slider
	Push(0);//Función responsable de ejecutar la animación del boton1 apenas abrir la página
	window.setInterval("Transicion()",6000);//Responsable de invocar la función transicion para cambiar la imagen
});


/* En las líneas siguientes se escriben las variables y funciones responsables del funcionamiento del slider*/

// Variables principales:

var Control = 1;// Controla el numero de la imagen que será mostrada
var Desplazamiento = true;//Controla la dirección del desplazamiento del slider, true=izquierda a derecha, false=derecha a izquierda

/* GenerarBotones: La función generar botones tiene como propósito ver la cantidad de imagenes cargadas al slider y recuperar
la etiqueta figure que contiene cada una para agregarles de forma automática un id para cada uno, y luego a partir
del nuúmero de fotos cargadas se generan botones con id propios y un evento onclick que se rellena de una función llamada "push()"
cuyo parametro se genera de forma dinámica*/

function GenerarBotones(){
	var ArregloImagenes = $("#ImagenesSlider > ul > li");/*Vemos cuantas fotos hay, las fotos del slider estan colocadas en 
	una lista y dentro de los li se encuentra las etiquetas figure que contienen las img*/

	//Hacemos un ciclo for cuyas interacciones sean el número de fotos o etiquetas figure en el slider

	for(var i = ArregloImagenes.length; i >= 1 ; i--){
		ArregloImagenes[i-1].setAttribute("id",`Foto${i-1}`);//Agregamos de forma dinámica los id a las etiquetas "li"

		/*Generamos de forma dinámica los botones con sus correspondientes clases, id únicos y onclick  de forma dinámica
		y adentro del li creamos una etiqueta span que no es ni más ni menos que la pequeña retícula del boton*/
		$("#BotonesSlider > ul").prepend(`<li class="Boton" id="Boton${i-1}" onclick="Push(${i-1})"><span class="PunteroBoton"></span></li>`);
	}
	
	return 0;
}

/* Push(): La función Push tiene como propósito la ejecución del funcionamiento de cada boton con su imagen 
correspondiente; Cabe aclarar que la configuración del estilo visual de los botones estan en el archivo Slider.css, 
aquí solo se hace el efecto "Push" del boton con su respectiva acción*/

function Push(Index){
	Control=Index;

	//Activamos el boton ,(y la retícula del boton), de la imagen y mostramos la imagen al mismo tiempo, segun su id
	$(`.Boton[id="Boton${Index}"]`).css({"opacity":"1","border":"solid 1.5px #ffffff"});
	$(`#ImagenesSlider > ul > li[id="Foto${Index}"]`).css({"z-index":"1","opacity":"1","transition":"opacity 2.5s ease-out"});
	$(`.Boton[id="Boton${Index}"] > span`).css({"height":"30%","width":"30%","top":"35%","left":"35%","background":"#ffffff"
	,"transition":"all 500ms ease-out"});

	/*Desactivamos el boton ,(y la retícula del boton), de la imagen y mostramos la imagen al mismo tiempo de las imagenes
	que no coincidan con el id del "Index" */ 
	$(`.Boton:not(.Boton[id="Boton${Index}"])`).css({"opacity":".50","border":"solid 1.5px #9C9C9C"});
	$(`.Boton:not(.Boton[id="Boton${Index}"]) > span`).css({"height":"100%","width":"100%","top":"0%","left":"0%","background":"#9C9C9C"
	,"transition":"all 500ms ease-out"});
	$(`#ImagenesSlider > ul > li:not(li[id="Foto${Index}"])`).css({"z-index":"-1","opacity":"0","transition":"opacity 2.5s ease-out"});
	
	return 0;
}

/*Transicion(): La función transicion es la responsable de ir mostrando las diferentes imagenes del slider*/

function Transicion(){
	var ContadorFotos = $("#ImagenesSlider > ul > li");
	

	/* La variable desplazamiento indica si el slider va de izquierda a derecha o viceversa ; Si es true va de izquierda a derecha
	, si es false va de derecha a izquierda */

	if((Control < ContadorFotos.length) && (Desplazamiento == true)){
		Push(Control);
		Control+=1;
		if(Control == ContadorFotos.length){Desplazamiento=false;Control-=2;}
	}

	else if((Control >= 0) && (Desplazamiento == false)){

		if(Control == 0){
			Push(Control);
			Control=1;
			Desplazamiento=true;
		}else{
			Push(Control);
			Control-=1;
		}	
	}

	return 0;
}