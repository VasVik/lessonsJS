let str = '1,2,3,4,5,6,7';

let arr = str.split(',');

// console.log(arr.join(';'))
// console.log(arr.reverse())
// arr.splice(1, 0 , 11, 22)
// console.log(arr)

let nArr = arr.concat([11,22]);
// console.log(nArr)

let numArr = nArr.map(function (i) {
    // return parseInt(i)
    return i * 2
});

console.log(numArr);


let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Viktor', age: 20},
    {name: 'Sveta', age: 20}
];

// return only first object with age 20
let foundPerson = objArr.find(function (person) {
    // console.log(person)
    return person.age === 20
});

// console.log(foundPerson)


let oddArray = [1,2,3,4,5,6,7,7].filter(function (i) {
    return i % 2 !== 0
});

console.log(oddArray);