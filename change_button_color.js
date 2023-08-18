function changeButtonColor(clickedButton) {
  // Get all buttons with class 'button'
  var buttons = document.getElementsByClassName("button");

  // Reset color for all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgba(11, 156, 47, 0.845)"; // Default color
  }

  // Set color for clicked button
  clickedButton.style.backgroundColor = "rgba(3, 75, 22, 0.845)";
}

function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
}
