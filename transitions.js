/**
 * Simplified Smooth Page Transitions
 * Restores instant native navigation while keeping subtle entrance animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ensure body is visible (failsafe for old styles)
    document.body.style.opacity = '1';

    // Remove any leftover overlays from previous versions
    const overlays = document.querySelectorAll('.page-transition-overlay');
    overlays.forEach(el => el.remove());

    /**
     * Optional: Trigger animations for elements that should enter after the main content
     * This adds a secondary layer of "smoothness"
     */
    const secondaryElements = document.querySelectorAll('.animate-on-load');
    secondaryElements.forEach((el, index) => {
        el.style.animationDelay = `${(index + 1) * 0.1}s`;
        el.classList.add('ready');
    });
});

// Handle the "Back" button from browser cache to re-trigger animations
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // Re-run animation by toggling a class if needed, 
        // but since we use CSS animations on load, they usually re-run.
        const main = document.querySelector('main');
        if (main) {
            main.style.animation = 'none';
            void main.offsetWidth; // Trigger reflow
            main.style.animation = null;
        }
    }
});

