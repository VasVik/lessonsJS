// исходый код
// const createPost = (title, text, date) => {
//     return {
//         title: title,
//         text: text,
//         date: date
//     }
// };

//упрощенный код + добавлены параметры по умолчанию
const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
    return {title, text, date}
};


const post = createPost('Заголовок', 'Очень важный текст', '15.07.2022');
console.log(post);

const post2 = createPost('Заголовок 2');
console.log(post2);
