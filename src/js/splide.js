import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { splideWrap } from './refs';

if (splideWrap) {
    new Splide(splideWrap, {
        type: 'loop',
        perPage: 1,
        width: 1440,
        autoWidth: true,
        gap: 24,
        arrows: false,
        pagination: false,
        drag: 'free',
        autoScroll: {
            speed: 1,
        },
    }).mount({ AutoScroll });
};