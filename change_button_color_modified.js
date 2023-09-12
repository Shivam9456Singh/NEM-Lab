function changeButtonColor(clickedButton) {
  // Get all buttons with class 'button'
  var buttons = document.getElementsByClassName("button");

  // Reset color for all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#0064bc"; // Default color
  }

  // Set color for clicked button
  clickedButton.style.backgroundColor = "#b9e2f5";
}

// function changeButtonColor(button) {
//   // ... other logic ...

//   // Add an 'active' class to the clicked button
//   button.classList.add("active");

//   // ... other logic ...
// }

function loadIframeContent(url) {
  var iframe = document.getElementsByName("iframe1")[0];
  if (iframe) {
    iframe.src = ""; // Clear the iframe
    setTimeout(function () {
      iframe.src = url; // Set the desired URL after a brief delay
    }, 50);
  }
}

function resizeIframe() {
  var iframe = document.getElementsByName("iframe1")[0];
  iframe.style.height = "280px"; // Reset the iframe height

  setTimeout(function () {
    iframe.style.height =
      iframe.contentDocument.documentElement.scrollHeight + "px";
  }, 10); // Delay to allow content to render
}

// back to top
// Function to show/hide the "Back to Top" button based on scroll position
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    // Show button after scrolling down 300px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Add smooth scrolling effect when "Back to Top" button is clicked
document
  .getElementById("backToTop")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });

function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("dynamicContentPlaceholder").innerHTML = content;
    });
}
