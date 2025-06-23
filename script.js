document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    const name = link.getAttribute('href').substring(1);
    const sec = document.getElementById(name);
    if (sec) sec.classList.remove('hidden');
  });
});

// Programs modal
const modal = document.getElementById('programModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

document.querySelectorAll('.program-card .read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.program-card');
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDescription.textContent = card.querySelector('p').textContent;
    modal.classList.remove('hidden');
  });
});

document.querySelector('.modal .close-btn').addEventListener('click', () => {
  modal.classList.add('hidden');
});
