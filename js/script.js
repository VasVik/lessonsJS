let person = {
    name: 'max',
    age: '39',
    car: {
        model: 'ford'
    },
    job: 'admin',
    friends: ['Elena', 'Igor']
};

// преобразование обьекта в строку
let str = JSON.stringify(person);

console.log(str);

// преобразование обратно в объект JSON
console.log(JSON.parse(str));

console.log(person.car.model);
console.log(person.friends);