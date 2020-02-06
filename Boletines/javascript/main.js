// obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// recorrerlos

links.forEach(function(link){

	// agregar un evento click a cada uno de ellos
	link.addEventListener("click",function(ev){
		ev.preventDefault();
		let content = document.querySelector(".content");

		// quitarle las clases de animación que ya tiene
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");

		// agregar clases para animar su salida
		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		window.location.href = '../';

		return false;
	});
});

