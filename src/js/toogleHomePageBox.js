import { homeLink, discoverLink, mainBox, collectiblesBox, productBox, productMoreButton } from "./refs";
import { currentHomeLink, currentDiscoverLink } from "./current";
import { scrollToTop } from "./scroll";

export const visuallyHiddenClass = 'visually_hidden';

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
    currentHomeLink();
    hideMainBox();
    hideCollectiblesBox();
    showProductBox();
    scrollToTop();
};

function showMainBox() {
    mainBox.classList.remove(visuallyHiddenClass);
};

function hideMainBox() {
    mainBox.classList.add(visuallyHiddenClass);
};

function showCollectiblesBox() {
    collectiblesBox.classList.remove(visuallyHiddenClass);
};

function hideCollectiblesBox() {
    collectiblesBox.classList.add(visuallyHiddenClass);
};

function showProductBox() {
    productBox.classList.remove(visuallyHiddenClass);
};

function hideProductBox() {
    productBox.classList.add(visuallyHiddenClass);
};