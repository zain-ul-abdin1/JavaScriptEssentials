let array = [1, 3, 6, 47, 23];
let ofArray = Array.of(4,2, 5, 73, 12);
let fromArray = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']


const playgame = (function playgame() {
    const number = Math.floor(Math.random() * 10) + 1;

    const maxAttempts = 3;

    const history = [];

    return function () {

        while (history.length<maxAttempts) {
            var input = prompt("Please provide a number between 1 and 10");
            var guess = Number(input);

            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log("Please provide a valid number between 1 and 10 .")
                continue;
            }

            if (history.indexOf(guess)>-1){
                continue;
            }

            history.push(guess);

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
    
        console.log(`Game over! The number is ${number}, and you ${guessedMessage} in ${history.length} attempts`);
        console.log(`guessed numbers are : ${history.join(`, `)}`);
    }
}
)();
playgame();