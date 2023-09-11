function showModal(imgElement) {
  let modal = document.getElementById("imageModal");
  let enlargedImg = document.getElementById("enlargedImage");
  let windowHeight = window.innerHeight;

  // Set the enlarged image's source to the clicked image's source
  enlargedImg.src = imgElement.src;

  // Calculate the vertical center of the row
  let rowCenterY = imgElement.offsetTop + imgElement.offsetHeight / 2;

  // Adjust the modal's position
  modal.style.left = "50%"; // Center horizontally
  modal.style.transform = "translateX(-50%)"; // Adjust for modal's width

  if (imgElement.offsetTop < windowHeight / 3) {
    // If the image is in the top third of the viewport
    modal.style.top = "80px"; // Display just below the header
  } else if (imgElement.offsetTop > (2 * windowHeight) / 3) {
    // If the image is in the bottom third of the viewport
    modal.style.top = windowHeight - modal.offsetHeight + "px"; // Align with the bottom of the viewport
  } else {
    modal.style.top = rowCenterY - modal.offsetHeight / 2 + "px"; // Center in the row
  }

  // Display the modal
  modal.style.display = "block";
}
function closeModal() {
  let modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
