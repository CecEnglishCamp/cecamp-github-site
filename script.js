document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const ex = btn.nextElementSibling;
    ex.classList.toggle('expanded');
    btn.textContent = ex.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});

const cards = document.querySelectorAll('.program-card');
const wrapper = document.querySelector('.programs-wrapper');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const active = card.classList.contains('active');
    cards.forEach(c => c.classList.remove('active'));
    if (!active) {
      card.classList.add('active');
      wrapper.classList.add('active-mode');
    } else {
      wrapper.classList.remove('active-mode');
    }
  });
});
