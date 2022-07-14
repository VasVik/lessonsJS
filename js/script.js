let a = [1, 2, 3];
let b = [5, 'Hello', 6];

Array.prototype.double = function () {
    let newArray = this.map(function (item) {
        if (typeof item === 'number') {
            return Math.pow(item, 2);
        }
        if (typeof item === 'string') {
            return item += item;
        }
    });
    return newArray;
};

let newA = a.double();
let newB = b.double();

console.log('a', a);
console.log('A', newA);
console.log('A', newA.double());
console.log('b', b);
console.log('B', newB);