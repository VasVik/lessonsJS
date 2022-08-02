console.log('Клиент: хочу получить список пользователей');
console.log('...');

// setTimeout(function () {
//     console.log('Сервер: запрашиваю список пользователей у БД');
//     console.log('...');
//
//     setTimeout(function () {
//         console.log('БД: формирую список пользователей')
//         console.log('...');
//
//         setTimeout(function () {
//             console.log('Сервер: трансформирую данные для клиета');
//             console.log('...');
//
//             setTimeout(function () {
//                 console.log('Клиент: получил данные и отображаю их');
//             }, 1000)
//
//         }, 500)
//
//     }, 500)
//
// }, 1000)

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Сервер: запрашиваю список пользователей у БД');
        console.log('...');
        resolve();
    }, 2000)
})

promise.then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let users = [
                {uid: 'id1', name: 'maxim'},
                {uid: 'id2', name: 'elena'}
            ]

            // reject('Нет подключения к БД');

            console.log('БД: формирую список пользователей', users);
            console.log('...');
            resolve(users);
        }, 500);
    })
})
    .then(function (dbusers) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {

                let users = dbusers.map(function (i) {
                    return {
                        id: i.uid,
                        Firstname: i.name,
                        timestamp: Date.now()
                    }
                })

                console.log('Сервер: трансформирую данные для клиета');
                console.log('...');
                resolve(users);
            }, 500)
        })
    })

    .then(function (answer) {
        setTimeout(function () {
            console.log('Клиент: получил данные и отображаю их', answer);
        }, 2000)
    })

    .catch(function (error) {
        console.error(error);
    })
// .finally(function () {
//     console.log('Finally');
// })



