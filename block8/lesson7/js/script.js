class MyPromise {

    constructor(callback) {

        this.onCatch = null;
        this.onFinally = null;
        this.thenCbs = [];
        this.isRejected = false;

        function resolver(data) {

            if (this.isRejected) {
                return;
            }

            this.thenCbs.forEach(cb => {
                data = cb(data)
            })

            if (this.onFinally) {
                this.onFinally();
            }
        }

        function rejecter(error) {
            if (this.onCatch) {
                this.onCatch(error);
            }
            if (this.onFinally) {
                this.onFinally();
            }
        }

        callback(resolver.bind(this), rejecter.bind(this));

    }

    then(cb) {
        this.thenCbs.push(cb);
        return this;
    }

    finally(cb) {
        this.onFinally = cb;
        return this;
    }

    catch(cb) {
        this.isRejected = true;
        this.onCatch = cb;
        return this;
    }

}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        // reject('Some error!!!');
        resolve(2);
    }, 2000);
})

promise
    .then(num => num *= 2)
    // .catch(err => console.error(err))
    .then(num => num *= 3)
    .finally(() => console.log('Finally'))
    .then(num => console.log('Done!', num))
