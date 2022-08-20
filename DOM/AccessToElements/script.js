// let div = document.getElementById('playground')
// let p = document.getElementsByClassName('text')
// let h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

//          новые методы

// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

let div = document.querySelector('#playground')
let p = document.querySelectorAll('.text')
let h1 = document.querySelector('h1')
let ul = document.querySelector('div#playgroundNext > ul')
let ul2 = document.querySelector('div#playgroundNext > div ul')

console.log(div)
console.log(p)
console.log(h1)
console.log(ul)
console.log(ul2)