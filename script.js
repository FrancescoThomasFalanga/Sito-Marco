const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const zoomables = document.querySelectorAll('.zoomable');

zoomables.forEach(img => {
  img.addEventListener('click', () => {
    const bigSrc = img.dataset.image || img.src;
    lightboxImg.src = bigSrc;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});