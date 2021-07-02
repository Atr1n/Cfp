const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        slideToClickedSlide: true,
        watchOverflow: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            1170: {
                slidesPerView: 4,
                spaceBetween: 40
            },
        }
    })
})