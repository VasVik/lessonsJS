document.querySelector('button').addEventListener('click', function (event) {

    // работа со строкой
    let value = document.querySelector('input').value;
    localStorage.setItem('headerText', value);

//    работа с объектом

    let obj = {
        text: value
    };

    localStorage.setItem('obj', JSON.stringify(obj))

});

document.addEventListener('DOMContentLoaded', function () {

    // работа со строкой
    // let text = localStorage.getItem('headerText');
    //
    // if (text && text.trim()) {
    //     document.querySelector('h1').textContent = text;
    // }

    // работа с объектом my version

    // let obj = JSON.parse(localStorage.getItem('obj'));
    //
    // if (obj && obj.text.trim()){
    //     document.querySelector('h1').textContent = obj.text;
    // }

    // работа с объектом WMF version

    let obj = {};

    try {
        obj = JSON.parse(localStorage.getItem('obj'));
    } catch (e) {
        
    }

    if (obj && obj.text && obj.text.trim()){
        document.querySelector('h1').textContent = obj.text;
    }

});
