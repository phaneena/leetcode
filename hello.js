function createHelloWorld() {
    a="Hello World"
    return function(...args) {
        return a
    }
};
console.log(createHelloWorld()())