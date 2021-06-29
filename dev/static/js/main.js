const formBtn = document.querySelector('.info__submit-btn')
const addBtn = document.querySelector('.info__add-product')
const mainState = document.querySelector('.info__beginning-pay-wrap')
const addProdState = document.querySelector('.info__add-products-wrap')
const prodState = document.querySelector('.info__product-cards-wrap')

const radioBox = document.querySelector('.info__custom-radio')
const textBox = document.querySelectorAll('.info__content-choose-product')

textBox.forEach((item,) => {
    item.classList.add('active')
})

document.addEventListener('DOMContentLoaded', () => {
    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        
        mainState.style.display = 'none'
        addProdState.style.display = 'block'
        formBtn.textContent = 'Continue'
        // addProdState.style.display = 'none'
        // prodState.style.display = 'block'
    })

    formBtn.addEventListener('click', (e) => {
        e.preventDefault()

        addProdState.style.display = 'none'
        prodState.style.display = 'block'
    })

    
})

