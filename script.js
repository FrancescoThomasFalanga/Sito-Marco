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