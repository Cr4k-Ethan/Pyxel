// Fonction de recherche
document.getElementById('search-bar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = e.target.value.trim().toLowerCase();
        if (query) {
            // Rediriger vers la page des reviews avec le terme de recherche
            window.location.href = `reviews.html?search=${encodeURIComponent(query)}`;
        }
    }
});

// Fonction de gestion des résultats de recherche
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        // Pour le moment, juste une alerte pour vérifier la recherche
        // Ici vous pouvez ajouter une fonction pour filtrer les résultats affichés
        alert(`Recherche pour : ${searchQuery}`);
        
        // Optionnel : filtrer les articles sur la page des reviews
        // Assurez-vous que les articles ont des attributs data-search que vous pouvez utiliser
        // Exemple :
        // document.querySelectorAll('.article').forEach(article => {
        //     const title = article.querySelector('h3').textContent.toLowerCase();
        //     if (title.includes(searchQuery)) {
        //         article.style.display = 'block';
        //     } else {
        //         article.style.display = 'none';
        //     }
        // });
    }
});

// Animation de changement de page
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) clearInterval(interval);
    }, 50);
}

function fadeOut(element, callback) {
    element.style.opacity = 1;
    let opacity = 1;
    const interval = setInterval(() => {
        opacity -= 0.1;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50);
}

// Appliquer l'effet de transition lors du changement de page
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    
    // Fade-in effect for the page content
    fadeIn(mainContent);
});

// Transition de la page lors du clic sur les liens
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        
        // Fade-out effect for current page content
        fadeOut(document.querySelector('main'), () => {
            window.location.href = href;
        });
    });
});