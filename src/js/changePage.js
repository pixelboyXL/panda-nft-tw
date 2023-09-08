import { homeLink, discoverLink, productMoreButton, menu, homeLinkMob, discoverLinkMob } from "./refs";
import { indexHtml2, discoverHtml, productHtml, indexGitHub1, indexGitHub2, discoverGitHub, productGitHub, currentHomeLink, currentDiscoverLink } from "./current";
import { scrollToTop } from "./scroll";
import { ifSuccess } from "./notiflix";
import { toggleMenu } from "./mob_menu";

homeLink.addEventListener('click', goToMain);
discoverLink.addEventListener('click', goToDiscover);

homeLinkMob.addEventListener('click', goToMain);
discoverLinkMob.addEventListener('click', goToDiscover);

if (productMoreButton) {
    productMoreButton.addEventListener('click', goToDiscover);
};

function goToMain() {
    toggleMenu();
    currentHomeLink();
    if (!location.pathname.includes(indexGitHub1)) {
        location.pathname = indexHtml2;
    } else {
        location.pathname = indexGitHub2;
    };
};

function goToDiscover() {
    toggleMenu();
    currentDiscoverLink();
    if (!location.pathname.includes(indexGitHub1)) {
        location.pathname = discoverHtml;
    } else {
        location.pathname = discoverGitHub;
    };
};

export function goToProduct(event) {
    event.preventDefault();
    if (location.pathname === productHtml || location.pathname === productGitHub) {
        scrollToTop();
        ifSuccess();
        return;
    };
    toggleMenu();
    currentHomeLink();
    if (!location.pathname.includes(indexGitHub1)) {
        location.pathname = productHtml;
    } else {
        location.pathname = productGitHub;
    };
};