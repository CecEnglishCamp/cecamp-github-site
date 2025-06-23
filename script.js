// 섹션 전환 (header nav 클릭)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.classList.remove('hidden');
  });
});

// 프로그램 Read More → 풀스크린 모달
const modal = document.getElementById('progFullscreen');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.program-card');
    modalImg.src = card.querySelector('img').src;
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDesc.textContent = card.querySelector('p').textContent;
    modal.classList.remove('hidden');
  });
});

// 모달 닫기
modal.querySelector('.close-button').addEventListener('click', () => modal.classList.add('hidden'));
