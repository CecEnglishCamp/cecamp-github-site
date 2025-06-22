// 섹션 전환
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.classList.remove('hidden');
  });
});

// 모달 팝업 작동
const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const card = btn.closest('.program-card');
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDescription.textContent = card.querySelector('p').textContent;
    modal.style.display = "block";
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  modal.style.display = "none";
});
