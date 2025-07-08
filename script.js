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


const currentPath = window.location.pathname.split("/").pop(); // es: "profumi.html"
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  if (link.getAttribute("href") === currentPath || (currentPath === "" && link.getAttribute("href") === "index.html")) {
    link.classList.add("active");
  }
});
