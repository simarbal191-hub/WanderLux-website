const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  hiddenElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
