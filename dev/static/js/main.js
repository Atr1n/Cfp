const formBtn = document.querySelector('.info__submit-btn')
const addBtn = document.querySelector('.info__add-product')
const mainState = document.querySelector('.info__beginning-pay-wrap')
const addProdState = document.querySelector('.info__add-products-wrap')
const prodState = document.querySelector('.info__product-cards-wrap')


const textContent = document.getElementsByClassName('info__content-choose-product')
const radioBox = document.getElementsByName('product')

const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})

function radioChange() {
    function testRadio() {
        if (radioBox != null) {
            
        }
    }

    function checkRadio() {
        let arr = radioBox
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked) {
                console.log('checked');
                break
            }
        }
    }

    for (let i = 0; i < radioBox.length; i++) {
        radioBox[i].onchange = testRadio
    }   

    checkRadio()
}


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
    
radioChange()