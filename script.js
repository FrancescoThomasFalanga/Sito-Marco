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


// Prende l'ultima parte del path (es. "profumi", "index.html", "")
let currentPath = window.location.pathname;
if (currentPath === "/" || currentPath === "") {
  currentPath = "index.html";
} else {
  currentPath = currentPath.split("/").pop();
  if (currentPath === "") currentPath = "index.html";
  if (!currentPath.endsWith(".html")) currentPath += ".html";
}

// Seleziona tutti i link
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  const href = link.getAttribute("href");

  // Se il link combacia con la pagina corrente
  if (href === currentPath) {
    link.classList.add("active");
  }
});
