// 🔁 스크롤 애니메이션은 CSS에서 자동 실행

// 📌 섹션 이동
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.classList.remove('hidden');
  });
});

// 📌 모달 팝업
const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll('.program-card .read-more').forEach((btn, index) => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    modalTitle.textContent = btn.parentElement.querySelector('h3').textContent;
    modalDescription.textContent = btn.previousElementSibling.textContent;
    modal.style.display = "block";
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  modal.style.display = "none";
});
