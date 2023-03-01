var acc = document.getElementsByClassName("btn");

for (var i = 0; i < acc.length; i++) {

	acc[i].addEventListener("click", function() {

	this.classList.toggle("btnClicked"); //Toggle between adding and removing the "active" class to highlight the button that controls the panel

	var panel = this.nextElementSibling; //Toggle between hiding and showing the active panel

		if (panel.style.display === "flex") {
		  panel.style.display = "none";
		} else {
		  panel.style.display = "flex";
		}
});

}