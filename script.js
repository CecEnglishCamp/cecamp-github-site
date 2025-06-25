function openModal() {
  document.getElementById("episodeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("episodeModal").style.display = "none";
}

function showLevel(level) {
  const levels = ["a1", "a2", "b1", "b2"];
  levels.forEach(l => {
    document.getElementById(l).style.display = (l === level) ? "block" : "none";
  });
}
