function toggleBackground() {

	var graybg = document.getElementById("boxone");
	var mytext = document.getElementById("textcontainertwo");
	var textbox = document.getElementById("listenbox"); 

	var toggled = false;

	if (!toggled) {
		toggled = !toggled;
	    graybg.className = "slidein";
	    mytext.className = "fadein two";
	    textbox.className = "invisible";
	    return;
	}

	if (toggled) {
		toggled = !toggled;
	    graybg.className = "slideout";
	    mytext.className = "fadeout";
	} 
}	
