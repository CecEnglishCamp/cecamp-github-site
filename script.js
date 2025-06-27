document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        button.textContent = "Show Less";
      } else {
        content.classList.add("hidden");
        button.textContent = "Read More";
      }
    });
  });
});

