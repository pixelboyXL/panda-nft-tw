import { homeLink, discoverLink, productMoreButton } from "./refs";
import { indexHtml2, discoverHtml, productHtml, productGitHub, currentHomeLink, currentDiscoverLink } from "./current";
import { scrollToTop } from "./scroll";
import { ifSuccess } from "./notiflix";

homeLink.addEventListener('click', goToMain);
discoverLink.addEventListener('click', goToDiscover);

if (productMoreButton) {
    productMoreButton.addEventListener('click', goToDiscover);
};

function goToMain() {
    currentHomeLink();
    location.pathname = indexHtml2;
};

function goToDiscover() {
    currentDiscoverLink();
    location.pathname = discoverHtml;
};

export function goToProduct() {
    if (location.pathname === productHtml || location.pathname === productGitHub) {
        scrollToTop();
        ifSuccess();
        return;
    };
    currentHomeLink();
    location.pathname = productHtml;
};