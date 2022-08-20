// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

let div = document.querySelector('#playground')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

div.innerHTML = '<h2 style="color: red;">From javascript</h2>'
h1.textContent = 'Changed from JS'

console.log(input.value)
console.log(div.innerHTML)
console.log(h1.textContent)



