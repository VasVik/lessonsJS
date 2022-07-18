const createCar = (name, model) => ({name, model});

const ford = createCar('ford', 'focus');

console.log(ford);

const yearField = 'year';

const bmw = {
    name: 'bmw',
    ['model']: 'x7',
    [yearField]: 2020,

    logField() {
        // console.log(this.name, this.model, this.year);

        const {name, model, year} = this; // деструктуризация
        console.log(name, model, year);
    }

};

console.log(bmw);
bmw.logField();

// const name = bmw.name;
const {name} = bmw;
const {model, year} = bmw;

console.log(name, model, year);