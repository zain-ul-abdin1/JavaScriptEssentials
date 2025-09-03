
// console.log(number);



const playgame = (function playgame() {
    const number = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3;
    return function () {
        let attempts = 1;
        for (attempts = 1; attempts <= maxAttempts; attempts++) {
            var input = prompt("Please provide a number between 1 and 10");
            var guess = Number(input);

            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log("Please provide a valid number between 1 and 10 .")
                continue;
            }
            if (guess === number) {
                console.log("Congrats you guessed the number");
                var guessed = true;
                break;
            } else if (guess < number) {
                console.log("Your guess is too low");
            } else if (guess > number) {
                console.log("Your guess is too high");
            }
        }
        var guessedMessage = guessed ? 'guessed' : "didn't guess";
    
        console.log(`Game over! The number is ${number}, and you ${guessedMessage} in ${attempts} attempts`);
    }
}
)();