```html
<!-- index.html 하단, </body> 위에 삽입 -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-target");
        const content = document.getElementById(targetId);
        if (content) {
          const isHidden = content.classList.contains("hidden");
          content.classList.toggle("hidden");
          button.textContent = isHidden ? "Read Less" : "Read More";
        }
      });
    });
  });
</script>
```
