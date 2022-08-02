console.log('Клиент: хочу получить список пользователей');
console.log('...');

setTimeout(function () {
    console.log('Сервер: запрашиваю список пользователей у БД');
    console.log('...');

    setTimeout(function () {
        console.log('БД: формирую список пользователей')
        console.log('...');

        setTimeout(function () {
            console.log('Сервер: трансформирую данные для клиета');
            console.log('...');

            setTimeout(function () {
                console.log('Клиент: получил данные и отображаю их');
                console.log('...');
            }, 1000)

        }, 500)

    }, 500)

}, 1000)