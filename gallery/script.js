function showModal(imgElement) {
  let modal = document.getElementById("imageModal");
  let enlargedImg = document.getElementById("enlargedImage");
  enlargedImg.src = imgElement.src;
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
