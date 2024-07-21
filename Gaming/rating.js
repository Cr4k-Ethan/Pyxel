document.addEventListener('DOMContentLoaded', () => {
    const circleFill = document.querySelector('.circle-fill');
    const circleCover = document.querySelector('.circle-cover');
    const ratingText = document.querySelector('.rating-text');
    const degrees = (rating / 20) * 360; // Convertir la note en degrés

    // Met à jour le texte au centre du cercle
    ratingText.textContent = `${rating}/20`;

    // Met à jour le remplissage du cercle
    if (degrees <= 180) {
        circleFill.style.clip = `rect(0px, 100px, 100px, 50px)`;
        circleFill.style.transform = `rotate(${degrees}deg)`;
    } else {
        circleFill.style.clip = `rect(0px, 100px, 100px, 0px)`;
        circleFill.style.transform = `rotate(${degrees}deg)`;
    }

    // Cache la partie non remplie du cercle
    circleCover.style.backgroundColor = '#121212';
});
