let person = {
    name: 'Vasiliy',
    surname: 'Gl',
    burnIn: 1984,

    calculateAge: function (){
        let date = new Date();
        let yearNow = date.getFullYear();
        this.age = yearNow - this.burnIn
        let year = new Date().getFullYear();
        this.age1 = year - this.burnIn
    }
}

person.calculateAge()
console.log(person)