const toggleBtn = document.querySelector("#myBtn");
const spoiler = document.querySelector("#spoiler");

toggleBtn.addEventListener("click", () => {
  spoiler.style.display = !spoiler.style.display ? "block" : "";
});

window.addEventListener("keydown", (e) => {
  if (spoiler.style.display) {
    if (e.key === "Escape") {
      spoiler.style.display = "";
    }
  }
});
