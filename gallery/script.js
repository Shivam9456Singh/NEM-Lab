// function showModal(imgElement) {
//   let modal = document.getElementById("imageModal");
//   let enlargedImg = document.getElementById("enlargedImage");
//   enlargedImg.src = imgElement.src;
//   modal.style.display = "block";
// }

// function closeModal() {
//   let modal = document.getElementById("imageModal");
//   modal.style.display = "none";
// }

// update 1
// function showModal(imgElement) {
//   let modal = document.getElementById("imageModal");
//   let enlargedImg = document.getElementById("enlargedImage");

//   // Update the modal's position to be relative to the clicked image
//   modal.style.left = imgElement.offsetLeft + "px";
//   modal.style.top = imgElement.offsetTop + "px";

//   // Set the enlarged image's source to the clicked image's source
//   enlargedImg.src = imgElement.src;

//   // Display the modal
//   modal.style.display = "block";
// }

// function closeModal() {
//   let modal = document.getElementById("imageModal");
//   modal.style.display = "none";
// }

// update2
// function showModal(imgElement) {
//   let modal = document.getElementById("imageModal");
//   let enlargedImg = document.getElementById("enlargedImage");

//   // Set the enlarged image's source to the clicked image's source
//   enlargedImg.src = imgElement.src;

//   // Calculate the vertical center of the row
//   let rowCenterY = imgElement.offsetTop + imgElement.offsetHeight / 2;

//   // Adjust the modal's position
//   modal.style.left = "50%"; // Center horizontally
//   modal.style.transform = "translateX(-50%)"; // Adjust for modal's width
//   modal.style.top = rowCenterY - modal.offsetHeight / 2 + "px"; // Center in the row

//   // Display the modal
//   modal.style.display = "block";
// }

// function closeModal() {
//   let modal = document.getElementById("imageModal");
//   modal.style.display = "none";
// }

// update 3
function showModal(imgElement) {
  let modal = document.getElementById("imageModal");
  let enlargedImg = document.getElementById("enlargedImage");

  // Set the enlarged image's source to the clicked image's source
  enlargedImg.src = imgElement.src;

  // Calculate the vertical center of the row
  let rowCenterY = imgElement.offsetTop + imgElement.offsetHeight / 2;

  // Adjust the modal's position
  modal.style.left = "50%"; // Center horizontally
  modal.style.transform = "translateX(-50%)"; // Adjust for modal's width
  modal.style.top = rowCenterY - modal.offsetHeight / 2 + "px"; // Center in the row

  // Display the modal
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function enlargeImage(imgElement) {
  let overlay = document.querySelector(".enlarged-overlay");
  let enlargedImg = document.querySelector(".enlarged-image");
  enlargedImg.src = imgElement.src;
  overlay.style.display = "flex";
}

function closeImage() {
  let overlay = document.querySelector(".enlarged-overlay");
  overlay.style.display = "none";
}
