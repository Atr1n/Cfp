// import {add} from './modules/effects_func/fade'
// console.log(add(10, 250))
import {fadeIn, fadeOut} from './modules/effects_func/fade'

// fadeIn()

let btn = document.querySelector('.btn')
let box = document.querySelector('.box')
let close = document.querySelector('.close')

btn.addEventListener('click', function(){
    fadeIn(box)
})

close.addEventListener('click', function(){
    fadeOut(box)
})