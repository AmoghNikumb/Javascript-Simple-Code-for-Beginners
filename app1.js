const max = prompt("Enter the maximum number you want to enter");
const random = Math.floor(Math.random() * max) + 1;
console.log(random); 

let guess = prompt("Guess the correct number (or type 'quit' to exit)");

while (true) {
    if (guess === 'quit') {
        console.log("You have quitted!");
        break;
    }

    if (parseInt(guess) === random) {
        console.log("You are right! Congrats!");
        break;
    } else {
        console.log("Guess was wrong, please try again!");
        guess = prompt("Guess again (or type 'quit' to exit)");
    }
}

