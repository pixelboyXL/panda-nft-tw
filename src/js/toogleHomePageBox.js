import { homeLink, discoverLink, mainBox, collectiblesBox, productBox, productMoreButton } from "./refs";
import { currentHomeLink, currentDiscoverLink } from "./current";
import { scrollToTop } from "./scroll";
import { ifSuccess } from "./notiflix";

const isHiddenClass = 'is_hidden';

homeLink.addEventListener('click', goToMain);
discoverLink.addEventListener('click', goToDiscover);

if (productMoreButton) {
    productMoreButton.addEventListener('click', goToDiscover);
};

function goToMain() {
    currentHomeLink();
    showMainBox();
    hideCollectiblesBox();
    hideProductBox();
    scrollToTop();
};

function goToDiscover() {
    hideMainBox();
    currentDiscoverLink();
    showCollectiblesBox();
    hideProductBox();
    scrollToTop();
};

export function goToProduct() {
    if (!productBox.classList.contains(isHiddenClass)) {
        scrollToTop();
        ifSuccess();
        return;
    };
    currentHomeLink();
    hideMainBox();
    hideCollectiblesBox();
    showProductBox();
    scrollToTop();
};

function showMainBox() {
    mainBox.classList.remove(isHiddenClass);
};

function hideMainBox() {
    mainBox.classList.add(isHiddenClass);
};

function showCollectiblesBox() {
    collectiblesBox.classList.remove(isHiddenClass);
};

function hideCollectiblesBox() {
    collectiblesBox.classList.add(isHiddenClass);
};

function showProductBox() {
    productBox.classList.remove(isHiddenClass);
};

function hideProductBox() {
    productBox.classList.add(isHiddenClass);
};