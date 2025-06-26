// script.md

document.addEventListener("DOMContentLoaded", function () {
  // Scroll behavior for internal links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form submission handler (mock)
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const message = document.querySelector("#message").value;

      if (!name || !email || !message) {
        alert("Please fill out all required fields.");
        return;
      }

      console.log("Message sent:", {
        name,
        email,
        phone,
        message
      });

      alert("Thank you for reaching out! We’ll get back to you soon.");
      contactForm.reset();
    });
  }

  // Expandable blog or program sections
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.classList.toggle("expanded");
      this.textContent = content.classList.contains("expanded") ? "Show less" : "Read more";
    });
  });
});
