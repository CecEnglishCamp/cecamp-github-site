document.addEventListener('DOMContentLoaded', () => {
  const epi = document.getElementById('episodeVideo');
  let isExpanded = false;

  epi.addEventListener('click', () => {
    if (!isExpanded) {
      isExpanded = true;
      epi.pause(); // 자동 재생 멈춤
      epi.removeAttribute('loop');
      epi.setAttribute('controls', 'true');
      epi.style.width = '90%';
      epi.style.maxWidth = '800px';
      epi.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
