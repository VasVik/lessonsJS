const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;

    // saveForm({title, text, description});

    // Rest
    saveForm(title, text, description);
});

// исходный код
// function saveForm(data) {
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title: data.title,
//         text: data.text
//     };
//     console.log('Form-data:', formData);
// }

// оптимизация
// function saveForm(data) {
//
//     const {title, text, description} = data;
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     };
//
//     console.log('Form-data:', formData);
// }

// function saveForm({title, text, description}) {
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     };
//
//     console.log('Form-data:', formData);
// }

// Spread

// function saveForm(data) {
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     };
//
//     console.log('Form-data:', formData);
// }

// Rest

function saveForm(...args) {

    // console.log('Args:', args);

    const [title, text, description] = args;
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    };

    console.log('Form-data:', formData);
}
