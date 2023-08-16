import { homeLink, discoverLink } from "./refs";
import { wrongAdress } from "./notiflix";

const indexHtml1 = '/';
export const indexHtml2 = '/index.html';
export const discoverHtml = '/discover.html';
export const productHtml = '/product.html';

const indexGitHub1 = '/panda-nft-tw/';
const indexGitHub2 = '/panda-nft-tw/index.html';
const discoverGitHub = '/panda-nft-tw/discover.html';
export const productGitHub = '/panda-nft-tw/product.html';

export const currentClass = 'current';

const { pathname } = window.location;

switch (pathname) {
    case indexHtml1:
        currentHomeLink();
        break;
    case indexHtml2:
        currentHomeLink();
        break;
    case indexGitHub1:
        currentHomeLink();
        break;
    case indexGitHub2: 
        currentHomeLink();
        break;
    case discoverHtml:
        currentDiscoverLink();
        break;
    case discoverGitHub:
        currentDiscoverLink();
        break;
    case productHtml:
        currentHomeLink();
        break;
    case productGitHub:
        currentHomeLink();
        break;
    default:
        wrongAdress();
        break;
};

export function currentHomeLink() {
    homeLink.classList.add(currentClass);
    discoverLink.classList.remove(currentClass);
};

export function currentDiscoverLink() {
    homeLink.classList.remove(currentClass);
    discoverLink.classList.add(currentClass);
};