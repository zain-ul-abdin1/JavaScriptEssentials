// === Conditional Statements ===
let score = 75;

if (score >= 90) {
    console.log("You got A+ grade");
}

else if (score >= 80) {
    console.log("You got A grade");
}

else if (score >= 70) {
    console.log("You got B+ grade");
}
else if (score > 60) {
    console.log("You got C grade");
}

else if (score <= 50) {
    console.log("Sorry you are Fail");
}

// === Ternary Operator ===
let result = (77 > 4) ? "True" : "False";
console.log(`It is ${result}`);

//Switch Case 

let message = "Hello";

switch (message) {
    case "hello":

        console.log("Greeting has lower case hello")

        break;

    case "world":

        console.log("Greeting has message world");

        break;

    default:
        console.log("Greeting is not matched");
        break;
}

// For Loop
console.log("\n For Loop ");
for (let index = 0; index < 5; index++) {
    console.log(`Number : ${index}`);
}

console.log("\n While Loop");

let index = 0;
while (index < 5) {
    console.log(`Number : ${index}`);
    index++;
}
console.log("\nDo-While Loop:");
let j = 0;
do {
  console.log(`j = ${j}`);
  j++;
} while (j < 3);

const fruits = ["apple", "banana", "orange", "cherry"];
console.log("\nFor of Loop (Array):");
for (const fruit of fruits) {
  console.log(fruit);
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log("\nFor...in Loop (Object):");
for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}