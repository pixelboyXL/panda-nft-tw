import { productButtonList, productDescriptionButton, productDescription, productOffersButton, productOffers, productPriceHistoryButton, productPriceHistory } from "./refs";
import { visuallyHiddenClass } from "./toogleHomePageBox";

if (productButtonList) {
    productButtonList.addEventListener('click', changeProductInfo);
};

const activeClass = 'product__minor_button--active';

function changeProductInfo(event) {
    const { target } = event;
    const targetAlreadyActive = target.classList.contains(activeClass);

    if (target === productDescriptionButton) {
        if (targetAlreadyActive) {
            return;
        };
        showProductDescription();
        hideProductOffers();
        hideProductPriceHistory();
    };
    if (target === productOffersButton) {
        if (targetAlreadyActive) {
            return;
        };
        hideProductDescription();
        showProductOffers();
        hideProductPriceHistory();
    };
    if (target === productPriceHistoryButton) {
        if (targetAlreadyActive) {
            return;
        };
        hideProductDescription();
        hideProductOffers();
        showProductPriceHistory();
    };
};

function showProductDescription() {
    productDescriptionButton.classList.add(activeClass);
    productDescription.classList.remove(visuallyHiddenClass);
};

function hideProductDescription() {
    productDescriptionButton.classList.remove(activeClass);
    productDescription.classList.add(visuallyHiddenClass);
};

function showProductOffers() {
    productOffersButton.classList.add(activeClass);
    productOffers.classList.remove(visuallyHiddenClass);
};

function hideProductOffers() {
    productOffersButton.classList.remove(activeClass);
    productOffers.classList.add(visuallyHiddenClass);
};

function showProductPriceHistory() {
    productPriceHistoryButton.classList.add(activeClass);
    productPriceHistory.classList.remove(visuallyHiddenClass);
};

function hideProductPriceHistory() {
    productPriceHistoryButton.classList.remove(activeClass);
    productPriceHistory.classList.add(visuallyHiddenClass);
};