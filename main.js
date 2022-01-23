// get modal element
var modal = document.getElementById("simpleModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for open click
modalBtn.addEventListener("click", openModal);
// listen for close click
closeBtn.addEventListener("click", closeModal);
// listen for outside click
window.addEventListener("click", outsideClick);

// function to open modal
function openModal() {
  modal.style.display = "block";
}
// function to close modal
function closeModal() {
  modal.style.display = "none";
}
// function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}