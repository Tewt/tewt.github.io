function toggleBackground() {

  var graybg = document.getElementById("boxone");
  var mytext = document.getElementById("textcontainertwo");
  var textbox = document.getElementById("listenbox");

  if (graybg.classList.contains("invisible")) {
      graybg.className = "slidein";
      mytext.className = "fadein two";
      textbox.className = "invisible";
  } else if (graybg.classList.contains("slidein")) {
      graybg.className = "slideout";
      mytext.className = "fadeout";
  } else if (graybg.classList.contains("slideout")) {
      graybg.className = "slidein";
      mytext.className = "fadein two";
      textbox.className = "invisible";
  }
}
