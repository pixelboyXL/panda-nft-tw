import { homeLink, discoverLink } from "./refs";

const indexHtml1 = '/';
const indexHtml2 = '/index.html';
const indexGitHub1 = '/panda-nft-tw/';
const indexGitHub2 = '/panda-nft-tw/index.html';

export const currentClass = 'current';

const { pathname } = window.location;

if (pathname === indexHtml1 || pathname === indexHtml2) {
    currentHomeLink();
} else if (pathname === indexGitHub1 || pathname === indexGitHub2) {
    currentHomeLink();
};

export function currentHomeLink() {
    homeLink.classList.add(currentClass);
    discoverLink.classList.remove(currentClass);
};

export function currentDiscoverLink() {
    homeLink.classList.remove(currentClass);
    discoverLink.classList.add(currentClass);
};