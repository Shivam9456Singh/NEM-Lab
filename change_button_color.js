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

function loadIframeContent(url) {
  var iframe = document.getElementsByName("iframe1")[0];
  if (iframe) {
    iframe.src = ""; // Clear the iframe
    setTimeout(function () {
      iframe.src = url; // Set the desired URL after a brief delay
    }, 10);
  }
}

function resizeIframe() {
  var iframe = document.getElementsByName("iframe1")[0];
  iframe.style.height = "0px"; // Reset the iframe height

  setTimeout(function () {
    iframe.style.height =
      iframe.contentDocument.documentElement.scrollHeight + "px";
  }, 10); // Delay to allow content to render
}
