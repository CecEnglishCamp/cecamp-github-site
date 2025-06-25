// script.js
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    const targetId = button.getAttribute("href").replace("#", "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
