let person = {
    name: 'max',
    age: 39,
    job: 'admin'
};

console.log(person);

// итерация ключей обьекта вариант 1
// проходит в том числе по прототипу
// дабы исключить ключи в прототипе используется
// hasOwnProperty

// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//         console.log(key, person[key]);
//     }
// }

// итерация ключей обьекта вариант 2
// не идет по прототипу

// let keys = Object.keys(person);
// console.log(keys);

Object.keys(person).forEach(function (key) {
    console.log(person[key]);
});
