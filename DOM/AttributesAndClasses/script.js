let a = document.querySelector('a')

a.setAttribute('href', 'https://yahoo.com')
a.setAttribute('title', 'because there isn\'t yandex')
a.textContent = 'instead of Yandex'

console.log(a.attributes['title'])

// change Attributes

let  box1 = document.querySelector('#box1')
let  box2 = document.querySelector('#box2')

box1.classList.add('red')
// box2.classList.add('blue')

if (box2.classList.contains('blue')){
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}
