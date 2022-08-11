// const now = new Date().toLocaleString();
// console.log(now);

// console.log(Math.random())

const fs = require('fs');
const data = `
    Hello from NodeJS
    I'm random text!
`;

fs.writeFileSync('nodejs.txt', data);

const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'});
console.log(result);

console.log(__dirname);
console.log(__filename);