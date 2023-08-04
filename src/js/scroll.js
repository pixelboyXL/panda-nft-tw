import { toTopBtn } from "./refs";

window.addEventListener('scroll', onScroll);

if (toTopBtn) {
    toTopBtn.addEventListener('click', scrollToTop);
};

function onScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        toTopBtn.classList.add('button_to_top--visible');
    };
    if (scrolled <= coords && toTopBtn) {
        toTopBtn.classList.remove('button_to_top--visible');
    };
};

export function scrollToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
};