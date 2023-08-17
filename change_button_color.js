function changeButtonColor(clickedButton) {
  // Get all buttons with class 'button'
  var buttons = document.getElementsByClassName("button");

  // Reset color for all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(71, 72, 74)"; // Default color
  }

  // Set color for clicked button
  clickedButton.style.backgroundColor = "rgba(71, 156, 71, 0.575)";
}

function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
}
