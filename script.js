function expandContent(id) {
  const el = document.getElementById(id);
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}
