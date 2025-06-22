document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('episodeVideo');
  let isExpanded = false;

  video.addEventListener('click', () => {
    if (!isExpanded) {
      isExpanded = true;
      video.pause();
      video.removeAttribute('loop');
      video.setAttribute('controls', 'true');
      video.style.width = '90%';
      video.style.maxWidth = '800px';
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
