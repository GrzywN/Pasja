// Służy płynnemu scrollowaniu na przyciskach (góra, dół) i tych w menu nawigacyjnym.
// Zrobione tak dlatego, że scroll-behavior: smooth; nie działa z scroll-snap-type: y mandatory;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('form[action^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('action')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});