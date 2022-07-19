const createLink = ({path, name}) => `<a href="${path}" target="_blank">${name}</a>`;

const ul = document.querySelector('ul');

const google = `<li>${createLink({path: 'https:\\google.ru', name: 'google'})} </li>`;
const yandex = `<li>${createLink({path: 'https:\\ya.ru', name: 'Yandex'})}</li>`;

ul.insertAdjacentHTML("afterbegin", google);
ul.insertAdjacentHTML("afterbegin", yandex);

const strToLog = `
Hellow
World
    I am
        New tab
`;

console.log(strToLog);

//      myCode
let li = document.createElement("li");
li.innerHTML = createLink({path: 'https://rambler.ru', name: 'Rambler'});
ul.insertAdjacentElement("beforeend", li);
// ul.appendChild(li);

