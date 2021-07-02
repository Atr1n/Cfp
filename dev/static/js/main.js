// wrappersState
const defaultState = document.querySelector('.info__beginning-pay-wrap')
const secondState = document.querySelector('.info__add-products-wrap')
const productState = document.querySelector('.info__product-cards-wrap')

// btnsState
const defaultBtnState = document.querySelector('.info__add-product')
const secondBtnState = document.querySelector('#secondBtnState')

// radioBtns
const radioBtn = document.querySelectorAll('.info__custom-radio')
const changeBtn = document.querySelector('#changeValue')


function redirectState() {
    defaultBtnState.addEventListener('click', e => {
        e.preventDefault()

        defaultState.style.display = 'none'
        secondState.style.display = 'block'
    })

    secondBtnState.addEventListener('click', e => {
        e.preventDefault()

        secondState.style.display = 'none'
        productState.style.display = 'block'
    })
}

redirectState()