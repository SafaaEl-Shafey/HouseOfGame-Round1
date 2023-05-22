// Loading but with js
/*
(function loading() {
  var load = document.getElementById("load"),i=0;   
  var id = setInterval( function print() {
    if (i == 40) {
      clearInterval(id);
      window.location = "ShowAnimation/showAnimation.html";
    }
    else 
      load.style.width = ++i*10 + 'px'; 
  }, 100);

})();*/


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
    case "ArrowUp":
    case "ArrowLeft":
    case "ArrowRight":
    default:
      window.location = "ShowAnimation/showAnimation.html";
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);


function keyPressed(event) {
  window.location = "ShowAnimation/showAnimation.html";
}
  