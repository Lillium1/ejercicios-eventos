// Evento por cargar la pagina ONLOAD
var cargar = document.getElementsByTagName('body');
	cargar.onload = alert("La pagina esta cargada :3");

// Evento por pasar el mouse en el Input ---MOUSEOVER
var encimaMouse = document.getElementById('mouse')
	encimaMouse.addEventListener("mouseover", function(){
		alert("Estás sobre mi o_o");
	});

// Evento por pasar el mouse fuera del Input ---MOUSEOUT
var fueraMouse = document.getElementById('mouse')
	fueraMouse.addEventListener("mouseout", function(){
		alert("No estás sobre mi </3");
	});

// Evento por hacer click en el boton Enviar ---ONCLICK
var boton = document.getElementById('demo');
	boton.addEventListener("click", eventos);
function eventos (){
	boton.innerHTML = "Hola Mundo";
}
