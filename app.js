const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// add ClasList hidden
function hidden() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// remove ClasList hidden
function remove() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

showBtn.addEventListener("click", hidden);

closeBtn.addEventListener("click", remove);

overlay.addEventListener("click", remove);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    remove();
  }
});
