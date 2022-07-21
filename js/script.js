// RootElement <= Box <= instances

class RootElement {
    constructor(tagName = 'div') {

        this.$el = document.createElement(tagName);
        this.$el.style.marginBottom = '10px';

    }

    hide() {
        this.$el.style.opacity = '0';
    }

    show() {
        this.$el.style.opacity = '1';
    }

    addEnd() {
        document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el);
    }
}

class Box extends RootElement {
    constructor(color = 'black', size = 70, tagName) {

        super(tagName);
        this.size = size;
        this.color = color;
    }

    create() {
        this.$el.style.background = this.color;
        this.$el.style.width = this.$el.style.height = `${this.size}px`;

        this.addEnd();

        return this
    }
}

class Circle extends RootElement {
    constructor(color = 'brown', size = 50) {
        super();
        this.size = size;
        this.color = color;
    }

    create() {
        this.$el.style.background = this.color;
        this.$el.style.height = this.$el.style.width = `${this.size}px`;
        this.$el.style.borderRadius = '50%';
        this.addEnd();

        return this;
    }
}

const square = new Box('red', 100).create();
const circle = new Circle('blue', 100).create();
const square2 = new Box('yellow').create();

circle.$el.addEventListener('mouseenter', () => {
    circle.hide();
});
circle.$el.addEventListener('mouseleave', () => {
    circle.show();
});