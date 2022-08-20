// change Attributes

let box0 = document.querySelector('#box0')
let  box1 = document.querySelector('#box1')
let  box2 = document.querySelector('#box2')
let b = document.querySelector('button')

b.addEventListener('click', changeColor)

function changeColor() {
    if (box1.classList.contains('blue')){
        box1.classList.remove('blue')
    } else {
        box1.classList.add('blue')
    }
}

box0.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'red'
})
box0.addEventListener('mouseleave', function () {
    this.removeAttribute('style')
})