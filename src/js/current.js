const homeLink = document.getElementById('home');
const discoverLink = document.getElementById('discover');

const indexHtml1 = '/';
const indexHtml2 = '/index.html';
const indexGitHub1 = '/panda-nft-tw';
const indexGitHub2 = '/panda-nft-tw/index.html';
const discoverHtml = '/discover.html';
const discoverGitHub = '/panda-nft-tw/discover.html';

const { pathname } = location;

if (pathname === indexHtml1 || pathname === indexHtml2) {
    homeLink.classList.add('current');
} else if (pathname === indexGitHub1 || pathname === indexGitHub2) {
    homeLink.classList.add('current');
};

if (pathname === discoverHtml) {
    discoverLink.classList.add('current');
} else if (pathname === discoverGitHub) {
    discoverLink.classList.add('current');
};