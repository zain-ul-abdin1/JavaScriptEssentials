function helloWorld() {
    alert('hello, world');
}

function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b == 0) {
        throw new Error('cannot divide by 0');
    } else {
        return a / b;
    }
}

var globalVar = 'global';

function sayHello(name) {
    let message;
    message = 'Hello, ' + name;
    console.log(message.toUpperCase()); // Now logs to console
}

// Call functions so something happens
console.log("Sum of 5 and 3:", sum(5, 3));
console.log("Division of 10 by 2:", divide(10, 2));

sayHello("Zain"); // Test sayHello
// Uncomment to see alert
helloWorld();
