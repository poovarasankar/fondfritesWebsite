

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;

    function slideCarousel() {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        scrollAmount += 300;
        if (scrollAmount > maxScroll) {
            scrollAmount = 0; // Reset carousel to the beginning
        }
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }

    setInterval(slideCarousel, 3000); // Slide every 3 seconds
});
