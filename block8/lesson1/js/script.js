// setTimeout(function () {
//     console.log('test!!!');
// }, 1000 * 2);

let i = 0;
let interval = setInterval(function () {
    console.log(i++);
}, 1000 * 2);

setInterval(function () {
    clearInterval(interval);
}, 1000 * 5);