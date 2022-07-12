let createCounter = function (counterName) {
    let counter = 0;

    // return function () {
    //     console.log(counterName, ++counter)
    // }

    return {
        increment: function () {
            counter++;
        },
        decriment: function () {
            counter--;
        },
        getCounter: function () {
            return counter;
        }
    }
};

let counterA = createCounter('counterA');
let counterB = createCounter('counterB');

counterA.increment();
counterA.increment();
counterA.increment();

counterB.decriment();
counterB.decriment();