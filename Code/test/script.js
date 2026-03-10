// Arithmatic Operations

let f1 = prompt("inter the first No:");
let f2 = prompt("inter the 2nd No:")

let result1 = console.log(Number(f1) + Number(f2));
let result2 = console.log(Number(f1) - Number(f2));
let result3 = console.log(Number(f1) * Number(f2));
let result4 = console.log(Number(f1) / Number(f2));


// Number Gussing Game.

let randomNumber = Math.floor(Math.rendom() * 10 ) + 1;
let guess;

do {
    guess = Number(prompt("Guess the Number!"));
    if(guess > randomNumber) console.log("Too High! : Try Again.");

    if(guess < randomNumber) console.log("Too Low! : Try Again.");
} while(guess !== randomNumber);

console.log("Congratulation You Entered the correct Number: " + randomNumber);


// Exceed 100

let result = 0;
let x;

do {
    x = prompt("Enter the num");

     if(result < 100) {
        result = result + x;
    } else {
        console.log("you exceed the number")
    }
} while (result == 100)
