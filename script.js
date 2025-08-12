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

// CAROSELLO IMMAGINI
document.querySelectorAll(".carousel").forEach(carousel => {
    const imagesContainer = carousel.querySelector(".carousel-images");
    const images = carousel.querySelectorAll("img");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let index = 0;

    function showImage(i) {
        index = (i + images.length) % images.length;
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => showImage(index - 1));
    nextBtn.addEventListener("click", () => showImage(index + 1));
});