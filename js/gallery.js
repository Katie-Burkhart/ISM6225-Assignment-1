const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');

    });

    // Show the selected slide
    slides[index].classList.add('active');
}