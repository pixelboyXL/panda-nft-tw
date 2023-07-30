const toTopBtn = document.querySelector('.button_to_top');

window.addEventListener('scroll', onScroll);

if (toTopBtn) {
    toTopBtn.addEventListener('click', onToTopBtn);
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

function onToTopBtn() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
};