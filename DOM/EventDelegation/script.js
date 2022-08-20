let wrap = document.getElementById('wrapper')

wrap.addEventListener('click', function (event) {

    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p') {

        let className = event.target.classList.contains('red')

        if (className) {
            event.target.style.cssText = 'background-color: blue; color: white'
        } else {
            event.target.style.color = 'blue'
        }
    }
    console.log(tagName)
})