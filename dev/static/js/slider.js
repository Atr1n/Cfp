document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        slideToClickedSlide: true,
        watchOverflow: true,

        autoplay: {
            delay: 2000,
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            1170: {
                slidesPerView: 4,
                spaceBetween: 40
            },
        }
    })
})