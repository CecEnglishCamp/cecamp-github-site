// script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      alert("Read More section will expand here.");
      // 향후 실제 콘텐츠 확장 기능 삽입 예정
    });
  });
});
