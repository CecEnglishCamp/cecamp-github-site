// script.js

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();

    // 추후 전체 페이지 확장 기능을 여기에 구현
    alert("Read More section will expand here.");
  });
});
