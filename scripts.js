document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.construction-icons img');
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.style.animation = `fadeIn 2s ease-in-out ${index * 0.5}s forwards`;
    }, index * 500);
  });
});
