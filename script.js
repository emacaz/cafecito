// JavaScript code for the slideshow functionality
let slideIndex = 0;
const images = document.querySelectorAll('.slideshow-container img');
showSlides();

function showSlides() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > images.length) {
        slideIndex = 1;
    }

    images[slideIndex - 1].style.display = 'block';

    // Change slide every 3 seconds (adjust timing as needed)
    setTimeout(showSlides, 1000);
}