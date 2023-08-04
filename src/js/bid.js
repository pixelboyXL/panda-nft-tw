import { bidHeart, bidButton } from "./refs";
import { goToProduct } from "./toogleHomePageBox";

const activeClass = 'bid_icon--pink';

bidHeart.forEach(function (heart) {
    heart.addEventListener('click', () => {
        heart.classList.toggle(activeClass);
    });
});

bidButton.forEach(function (button) {
    button.addEventListener('click', goToProduct);
});