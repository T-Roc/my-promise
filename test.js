const MyPromise = require('./my-promise')

MyPromise.resolve().then(() => {
    console.log(0);
    return new MyPromise(resolve => {
        resolve(4)
    })
}).then((res) => {
    console.log(res)
})

MyPromise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})