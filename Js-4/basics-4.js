
(function greet(){
    console.log("Here is a mini calculator");
})();

// function declaration

function add(a , b){
    return a+b;
}

//function expression

const subtract = function(a,b){
    return a-b;
}

//Arrow Function
const multiply = (a,b)=> a*b;

//Closure

function createCounter(){
    let counter = 0;
    return function(){
        counter++;
        console.log(`Current count : ${counter}`);
    };
}

const count = createCounter();

// High Order Function
function calculate (a,b,operation){
    return  operation(a,b);
}

console.log(add(5,2));
console.log(subtract(8,2));
console.log(multiply(5,2));
console.log(calculate(5,5,multiply));

count();
count();
count();
count();
