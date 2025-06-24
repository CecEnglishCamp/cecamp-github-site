/* script.js */
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    alert("Read More section will expand here.");
  });
});
