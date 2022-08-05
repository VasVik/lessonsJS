function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, ms)
    })
}

let p1 = sleep(1500).then(function () {
    return {
        name: 1500
    }
})
let p2 = sleep(3000).then(function () {
    return {
        name: 3000
    }
})
let p3 = sleep(4000).then(function () {
    return {
        name: 4000
    }
})

// Promise.all([p1, p2, p3]).then(function (data) {
//     console.log('all', data)
// })
// Promise.race([p1, p2]).then(function (data) {
//     console.log('race', data)
// })

async function start() {
    let all = await Promise.all([p1, p2, p3])
    let race = await Promise.race([p1, p2])

    console.log('all', all)
    console.log('race', race)
}

start()