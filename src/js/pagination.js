import { paginationPrevButton, paginationLinks, paginationNextButton } from "./refs";

const activeClass = 'pagination__item--active';

const amountOfPages = 24;
let page = '';
const dots = '...';

setPageDynamic();

if (paginationPrevButton) {
    paginationPrevButton.addEventListener('click', onPaginationPrevButton);
};

if (paginationLinks) {
    paginationLinks.forEach(function (link, index) {
        link.addEventListener('click', () => {
            const { textContent } = link;
            if (textContent === dots) {
                return;
            };
            onPaginationLink(link);
        });
    });
};

if (paginationNextButton) {
    paginationNextButton.addEventListener('click', onPaginationNextButton);
};

function onPaginationPrevButton() {
    if (page > 1) {
        page -= 1;
        showPrevButton();
        showNextButton();
    };
    if (page === 1) {
        hidePrevButton();
    };
    if (page <= amountOfPages) {
        showNextButton();
    };
    doPagination();
};

function onPaginationLink(link) {
    setPageStatic(link);
    if (page === 1) {
        showNextButton();
        hidePrevButton();
    };
    if (page >= 2 && page < amountOfPages) {
        showPrevButton();
        showNextButton();
    };
    if (page === amountOfPages) {
        showPrevButton();
        hideNextButton();
    };
    doPagination();
};

function onPaginationNextButton() {
    if (page >= 1 && page < amountOfPages) {
        page += 1;
    };
    if (page <= amountOfPages) {
        showPrevButton();
    };
    if (page === amountOfPages) {
        showPrevButton();
        hideNextButton();
    };
    doPagination();
};

function doPagination() {
    removePrevActive();
    if (page < 5) {
        setActiveLinkMath(page);
        linksTextContentStatic();
    };
    if (page >= 5) {
        if (page <= amountOfPages - 4) {
            linksTextContentMathPage();
        };
        if (page === amountOfPages - 3) {
            linksTextContentMathAmountPages();
            setActiveLinkStatic(3);
        };
        if (page === amountOfPages - 2) {
            linksTextContentMathAmountPages();
            setActiveLinkStatic(4);
        };
        if (page === amountOfPages - 1) {
            linksTextContentMathAmountPages();
            setActiveLinkStatic(5);
        };
    };
    if (page === amountOfPages) {
        linksTextContentMathAmountPages();
        setActiveLinkStatic(6);
    };
};

function setPageStatic(linkObject) {
    const { textContent } = linkObject;
    page = Number(textContent);
};

function setPageDynamic() {
    const activePage = document.querySelector('.pagination__item--active');
    if (activePage) {
        const { textContent } = activePage;
        page = Number(textContent);
        if (page === 1) {
            hidePrevButton();
        } else {
            doPagination();
        };
    };
    return;
};

function showPrevButton() {
    paginationPrevButton.removeAttribute('disabled');
    paginationPrevButton.classList.remove('pagination__prev_button--disabled');
};

function hidePrevButton() {
    paginationPrevButton.setAttribute('disabled', 'disabled');
    paginationPrevButton.classList.add('pagination__prev_button--disabled');
};

function showNextButton() {
    paginationNextButton.removeAttribute('disabled');
    paginationNextButton.classList.remove('pagination__prev_button--disabled');
};

function hideNextButton() {
    paginationNextButton.setAttribute('disabled', 'disabled');
    paginationNextButton.classList.add('pagination__prev_button--disabled');
};

function removePrevActive() {
    const activeLink = document.querySelector('.pagination__item--active');
    activeLink.classList.remove(activeClass);
};

function setActiveLinkMath(page) {
    paginationLinks[page - 1].classList.add(activeClass);
};

function setActiveLinkStatic(linkIndex) {
    paginationLinks[linkIndex].classList.add(activeClass);
};

function linksTextContentStatic() {
    paginationLinks[0].textContent = 1;
    paginationLinks[1].textContent = 2;
    paginationLinks[2].textContent = 3;
    paginationLinks[3].textContent = 4;
    paginationLinks[4].textContent = 5;
    paginationLinks[5].textContent = dots;
    paginationLinks[6].textContent = amountOfPages;
};

function linksTextContentMathPage() {
    paginationLinks[1].textContent = dots;
    paginationLinks[2].textContent = page - 1;
    paginationLinks[3].classList.add(activeClass);
    paginationLinks[3].textContent = page;
    paginationLinks[4].textContent = page + 1;
    paginationLinks[5].textContent = dots;
    paginationLinks[6].textContent = amountOfPages;
};

function linksTextContentMathAmountPages() {
    paginationLinks[1].textContent = dots;
    paginationLinks[2].textContent = amountOfPages - 4;
    paginationLinks[3].textContent = amountOfPages - 3;
    paginationLinks[4].textContent = amountOfPages - 2;
    paginationLinks[5].textContent = amountOfPages - 1;
    paginationLinks[6].textContent = amountOfPages;
};