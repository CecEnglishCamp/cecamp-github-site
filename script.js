function showSection(id) {
  document.querySelectorAll('.page').forEach(sec => {
    sec.classList.toggle('active', sec.id === id);
  });
}
