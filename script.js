document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.previousElementSibling;
      const isVisible = content.style.display === "block";

      // 토글 동작
      content.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "Read more" : "Show less";
    });
  });
});
