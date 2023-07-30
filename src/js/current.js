const homeLink = document.getElementById('home');
const discoverLink = document.getElementById('discover');

const indexHtml1 = '/';
const indexHtml2 = '/index.html';
const discoverHtml = '/discover.html';

if (location.pathname === indexHtml1 || location.pathname === indexHtml2) {
    homeLink.classList.add('current');
};

if (location.pathname === discoverHtml) {
    discoverLink.classList.add('current');
};