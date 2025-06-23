// Modal popup
const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".program-card .read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".program-card");
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDescription.textContent = card.querySelector("p").textContent;
    modal.style.display = "flex";
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});
