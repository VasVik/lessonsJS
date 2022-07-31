class input {
    constructor(tagName, dataList) {
        this.$el = document.querySelector(tagName);
        this.data = dataList.items;

        this.$label = this.$el.querySelector('.dropdown__label');
        this.$label.textContent = this.data[0].label;
        this.$menu = this.$el.querySelector('.dropdown__menu');
        this.$menu.insertAdjacentHTML('afterbegin', this.createLabel());

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {

                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }

            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        })
    }

    createLabel() {
        return this.data.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ');
    }

    select(id) {
        const item = this.data.find(i => i.id === id)
        this.$label.textContent = item.label;
        this.close();
    }

    open() {
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }
}

const inp = new input('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'}
    ]
});