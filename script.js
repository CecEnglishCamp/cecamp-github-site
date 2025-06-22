// Scroll to top on nav click
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});
