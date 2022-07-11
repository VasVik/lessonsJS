let ford = Object.create({
    calculateDistancePerYear: function () {
        Object.defineProperty(this, 'distancePerYear', {
            // enumerable: true,
            enumerable: false,
            writable: false,
            value: Math.ceil(this.distance / this.age)
        })
    }
},{
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('Получаем возраст');
            return new Date().getFullYear() - this.year;
        },
        set: function() {
            console.log('Задаем возраст');
        }
    }
});

ford.calculateDistancePerYear();

for (let key in ford) {
    if (ford.hasOwnProperty(key)){
        console.log(key, ford[key]);
    }
}