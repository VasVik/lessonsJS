let person = {
    name: 'max',
    age: 39,
    job: 'admin',
    displayInfo: function (ms) {
        setTimeout(function () {
            console.log('Name:', this.name);
            console.log('Age:', this.age);
            console.log('Job:', this.job);
        }.bind(this), ms)
    }
};

person.displayInfo(500);