// 내비게이션 이동
document.querySelectorAll('.navbar a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    const sec = document.querySelector(id);
    window.scrollTo({ top: sec.offsetTop - 60, behavior: 'smooth' });
  });
});

// 프로그램 카드 모달 기능
const modal = document.getElementById('program-modal');
const titleEl = modal.querySelector('#modal-title');
const textEl = modal.querySelector('#modal-text');
modal.querySelector('.modal-close')
  .addEventListener('click', () => (modal.style.display = 'none'));
window.addEventListener('click', e => (e.target === modal) && (modal.style.display = 'none'));

document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.program-card');
    titleEl.textContent = card.dataset.title;
    textEl.textContent = card.dataset.content;
    modal.style.display = 'block';
  });
});
