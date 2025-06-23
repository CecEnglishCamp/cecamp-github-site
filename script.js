// 프로그램 모달 열기/닫기
const modal = document.getElementById("program-modal");
const openBtns = document.querySelectorAll("#programs .card button");
const closeBtn = document.querySelector(".modal .close");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});
