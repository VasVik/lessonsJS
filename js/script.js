function printObject(objName) {
    console.log('Printing object:', objName);
    for (let key in this) {
        console.log('[' + key + ']', this[key]);
    }
}

let person = {
    firstName: 'max',
    age: 27,
    job: 'admin',
    friends: ['elena', 'igor']
};

let car = {
    name: 'ford',
    model: 'focus',
    year: 2017
};

let printPerson = printObject.bind(person);
printPerson('Person');

// сразу вызывает функцию
printObject.call(car, 'Car');

// похоже на call только параметры передаются массивом
printObject.apply(person, ['Print Person with apply']);