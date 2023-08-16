const refs = {
  homeLink: document.getElementById('home'),
  discoverLink: document.getElementById('discover'),
  bidHeart: document.querySelectorAll('.bid_icon'),
  bidButton:document.querySelectorAll('.bid_button'),
  productMoreButton: document.querySelector('.product__more_button'),
  productButtonList: document.querySelector('.product__minor_button_list'),
  productDescriptionButton: document.getElementById('description'),
  productDescription: document.querySelector('.product__minor_description_wrap'),
  productOffersButton: document.getElementById('offers'),
  productOffers: document.querySelector('.product__minor_offers_wrap'),
  productPriceHistoryButton: document.getElementById('price_history'),
  productPriceHistory: document.querySelector('.product__minor_price_history_wrap'),
  toTopBtn: document.querySelector('.button_to_top'),
  isUnderDevelopmentLink: document.querySelectorAll('[data-development]'),
  splideWrap: document.querySelector('.splide'),
  paginationPrevButton: document.querySelector('.pagination__prev_button'),
  paginationLinks: document.querySelectorAll('.pagination__item'),
  paginationNextButton: document.querySelector('.pagination__next_button'),
};

export const {
  homeLink,
	discoverLink,
  bidHeart,
  bidButton,
  productMoreButton,
  productButtonList,
  productDescriptionButton,
  productDescription,
  productOffersButton,
  productOffers,
  productPriceHistoryButton,
  productPriceHistory,
  toTopBtn,
  isUnderDevelopmentLink,
  splideWrap,
  paginationPrevButton,
  paginationLinks,
  paginationNextButton,
} = refs;
