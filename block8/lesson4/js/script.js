document.querySelector('#load').addEventListener('click', load);

function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    // my version

    // fetch(url)
    //     .then(response => response.json())
    //     .then(json => {
    //         let html = json.map(i=>{
    //             return `<li>${i.id} ${i.name} (${i.email})</li>`
    //         }).join(' ');
    //         document.querySelector('#list').insertAdjacentHTML('afterbegin', html);
    //     })

    // wfm version

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var ul = document.querySelector('#list');

            var html = data.map(function (item) {
                return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
            })

            ul.insertAdjacentHTML('afterbegin', html.join(' '));
        })

}