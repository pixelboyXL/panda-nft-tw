import Notiflix from 'notiflix';
import { isUnderDevelopmentLink } from './refs';

const pandaNotiflixTheme = {
    background: '#1E50FF',
    notiflixIconColor: '#FFFFFF',
};

function notiflixTheme() {
    Notiflix.Notify.init({
            borderRadius: '16px',
            fontFamily: 'Poppins',
        info: pandaNotiflixTheme,
        success: pandaNotiflixTheme,
    });
};

notiflixTheme();

if (isUnderDevelopmentLink) {
    isUnderDevelopmentLink.forEach(function (link) {
        link.addEventListener('click', () => {
            isUnderDevelopment();
        });
    });
};

const infoText = 'Oops... sorry, this functionality is under development🙈';

export function isUnderDevelopment() {
    Notiflix.Notify.info(infoText);
};

const successText = 'Yeap, you already in product page example👌';

export function ifSuccess() {
    Notiflix.Notify.success(successText);
};