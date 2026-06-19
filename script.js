const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 0 25px rgba(56,189,248,0.3)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none";
    });
});