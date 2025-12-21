/**
 * Loader pour la page Mentions Légales
 * Charge les composants modulaires dans la page HTML existante
 */

import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { MentionsLegalesPage } from '../pages/MentionsLegalesPage.js';

// Initialiser la page
async function initMentionsPage() {
    // Monter la navbar
    const navbarRoot = document.getElementById('navbar-root');
    if (navbarRoot) {
        const navbar = new Navbar();
        navbar.render(navbarRoot);
    }
    
    // Monter le contenu principal
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) {
        const mentionsPage = new MentionsLegalesPage();
        mentionsPage.render(mainRoot);
    }
    
    // Monter le footer
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        const footer = new Footer();
        footer.render(footerRoot);
    }
}

// Lancer l'application quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMentionsPage);
} else {
    initMentionsPage();
}
