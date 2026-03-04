document.addEventListener('DOMContentLoaded', () => {
    // 1. SLIDESHOW LOGIC (For Index Page)
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        if (slides.length === 0) return;
        
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    if (slides.length > 0) {
        slides[0].classList.add('active');
        setInterval(showNextSlide, 3000); // 3-second rotation
    }

    // 2. CONTACT FORM ALERT
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Inquiry Sent Successfully.");
            contactForm.reset();
        });
    }
});