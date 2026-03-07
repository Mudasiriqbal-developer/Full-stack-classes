let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = Number(prompt("Guess the Number!"));
    if(guess > randomNumber) console.log("Too High! : Try Again.");

    if(guess < randomNumber) console.log("Too Low! : Try Again.");
} while(guess !== randomNumber);

console.log("Congratulation You Entered the correct Number: " + randomNumber);