const t={homeLink:document.getElementById("home"),discoverLink:document.getElementById("discover"),mainBox:document.querySelector(".main__box"),collectiblesBox:document.querySelector(".collectibles__box"),bidHeart:document.querySelectorAll(".bid_icon"),bidButton:document.querySelectorAll(".bid_button"),productBox:document.querySelector(".product__box"),productMoreButton:document.querySelector(".product__more_button"),productButtonList:document.querySelector(".product__minor_button_list"),productDescriptionButton:document.getElementById("description"),productDescription:document.querySelector(".product__minor_description_wrap"),productOffersButton:document.getElementById("offers"),productOffers:document.querySelector(".product__minor_offers_wrap"),productPriceHistoryButton:document.getElementById("price_history"),productPriceHistory:document.querySelector(".product__minor_price_history_wrap"),toTopBtn:document.querySelector(".button_to_top")},{homeLink:e,discoverLink:o,mainBox:i,collectiblesBox:n,bidHeart:c,bidButton:d,productBox:r,productMoreButton:s,productButtonList:u,productDescriptionButton:l,productDescription:a,productOffersButton:_,productOffers:m,productPriceHistoryButton:p,productPriceHistory:v,toTopBtn:f}=t,{pathname:L}=window.location;function y(){e.classList.add("current"),o.classList.remove("current")}function b(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}"/"===L||"/index.html"===L?y():"/panda-nft-tw/"!==L&&"/panda-nft-tw/index.html"!==L||y(),window.addEventListener("scroll",(function(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&f.classList.add("button_to_top--visible");t<=e&&f&&f.classList.remove("button_to_top--visible")})),f&&f.addEventListener("click",b);function h(){E(),e.classList.remove("current"),o.classList.add("current"),n.classList.remove("visually_hidden"),k(),b()}function B(){y(),E(),w(),r.classList.remove("visually_hidden"),b()}function E(){i.classList.add("visually_hidden")}function w(){n.classList.add("visually_hidden")}function k(){r.classList.add("visually_hidden")}e.addEventListener("click",(function(){y(),i.classList.remove("visually_hidden"),w(),k(),b()})),o.addEventListener("click",h),s&&s.addEventListener("click",h);c.forEach((function(t){t.addEventListener("click",(()=>{t.classList.toggle("bid_icon--pink")}))})),d.forEach((function(t){t.addEventListener("click",B)})),u&&u.addEventListener("click",(function(t){const{target:e}=t,o=e.classList.contains("product__minor_button--active");if(e===l){if(o)return;l.classList.add("product__minor_button--active"),a.classList.remove("visually_hidden"),q(),x()}if(e===_){if(o)return;g(),_.classList.add("product__minor_button--active"),m.classList.remove("visually_hidden"),x()}if(e===p){if(o)return;g(),q(),p.classList.add("product__minor_button--active"),v.classList.remove("visually_hidden")}}));function g(){l.classList.remove("product__minor_button--active"),a.classList.add("visually_hidden")}function q(){_.classList.remove("product__minor_button--active"),m.classList.add("visually_hidden")}function x(){p.classList.remove("product__minor_button--active"),v.classList.add("visually_hidden")}
//# sourceMappingURL=index.b9d65a5e.js.map
