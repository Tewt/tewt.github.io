function toggleBackground() {

  var graybg = document.getElementById("boxone");
  var mytext = document.getElementById("textcontainertwo");
  var textbox = document.getElementById("listenbox");
  var eyeicon = document.getElementById("eyeicon")

  if (graybg.classList.contains("invisible")) {
      eyeicon.src = "../images/eyeclose.png";
      graybg.className = "slidein";
      mytext.className = "fadein two";
      textbox.className = "invisible";
  } else if (graybg.classList.contains("slidein")) {
      eyeicon.src = "../images/eyeicon.png"
      graybg.className = "slideout";
      mytext.className = "fadeout";
  } else if (graybg.classList.contains("slideout")) {
      eyeicon.src = "../images/eyeclose.png"
      graybg.className = "slidein";
      mytext.className = "fadein two";
      textbox.className = "invisible";
  }
}
