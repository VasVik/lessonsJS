// function calculateAge(year) {
//     const curent = new Date().getFullYear();
//     return curent - year;
// }
//
// const getAge = year => {
//     const curent = new Date().getFullYear();
//     return curent - year;
// };

// const getAge = year => {
//     return new Date().getFullYear() - year;
// };

// const getAge = year => new Date().getFullYear() - year;
//
// const logAge = year => console.log(new Date().getFullYear() - year);
//
// logAge(1988);
//
// console.log(getAge(1987));

// старая реализация
// const person = {
//     firstName: 'max',
//     age: 27,
//     logNameWithTimeout: function () {
//         window.setTimeout(function () {
//             console.log(this.firstName);
//         }.bind(this),1000);
//     }
// };

/* новый вариант реализации
* function создает новый контекст с this,
* стрелочная функция не создает новый и по этому
* this используется от контента созданного function(т.е. от person)
* */
// const person = {
//     firstName: 'max',
//     age: 27,
//     logNameWithTimeout: function () {
//         window.setTimeout( () => {
//             console.log(this.firstName);
//         },1000)
//     }
// };

// 2-й новый вариант реализации
// равносилен предидущему варианту
const person = {
    firstName: 'max',
    age: 27,
    logNameWithTimeout() {
        window.setTimeout(() => {
            console.log(this.firstName);
        }, 1000)
    }
};


person.logNameWithTimeout();