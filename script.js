function expandEpisode() {
  alert("Read More section will expand here.");
  // 향후 확장 콘텐츠가 여기에 삽입됩니다.
}

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    expandEpisode();
  });
});
