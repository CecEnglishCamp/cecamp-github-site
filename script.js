```javascript
// Read More Button Scroll Behavior
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```
