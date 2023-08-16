import { bidHeart, bidButton } from "./refs";
import { goToProduct } from "./changePage";

const activeClass = 'bid_icon--pink';

if (bidHeart) {
    bidHeart.forEach(function (heart) {
        heart.addEventListener('click', () => {
            heart.classList.toggle(activeClass);
        });
    });
};

if (bidButton) {
    bidButton.forEach(function (button) {
        button.addEventListener('click', goToProduct);
    });
};
