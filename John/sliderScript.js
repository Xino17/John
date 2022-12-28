// JavaScript
const slides = document.querySelectorAll('.work');
let currentIndex = 0;
function slide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  currentIndex++;
  if (currentIndex > slides.length) {
    currentIndex = 1;
  }
  slides[currentIndex - 1].style.display = 'block';
  setTimeout(slide, 3000); // Change slide every 3 seconds
}

if (window.innerWidth < 770) {
  slides[2].style.display="none";
  // Swipe detection
  let xDown = null;
  let yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Most significant
      if (xDiff > 0) {
        // Swipe left
        currentIndex++;
        if (currentIndex > slides.length - 1) {
          currentIndex = 0;
        }
      } else {
        // Swipe right
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }
      }
    }

    // Reset values
    xDown = null;
    yDown = null;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentIndex].style.display = 'block';
  }

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
} 