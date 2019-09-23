/* Este scrit se utiliza para corregir algunos problemas que las hojas de estilo simplemente no puede solucionar */

$(function () {
	var AlturaPantalla = $(window).height();
	var AnchuraPantalla = $(window).width();

	/* Sacamos la altura del header que se establecio en porcentajes y luego los px
	obtenidos se establecen en el mismo header, esto es con el propósito de que no se
	desfigure el header al variar la altura de la pantalla*/
	var AlturaHeader = $("header").height();
	$("header").outerHeight(AlturaHeader);
	//

	/* Con ayuda de jquery corregimos el posicionamiento del #ContenedorGeneral con relacion
	al espacio dejado hacia arriba, esto solo aplica con un ancho de pantalla menor a 600px , 
	se calcula el espacio de altura dejado por los tres componentes que se muestran en la
	pantalla de primero, el #Slider el header y el contenedordebotonesdeslider*/
	if($("#Slider").length > 0){

		if(AnchuraPantalla < 600){
			var AlturaSlider = $("#Slider").height();
			var AlturaBotonesSlider = $("#BotonesSlider").height();
			$("#ContenedorGeneral").css({"top":`${AlturaHeader+AlturaSlider+AlturaBotonesSlider}px`});
		}
	}
	//

});