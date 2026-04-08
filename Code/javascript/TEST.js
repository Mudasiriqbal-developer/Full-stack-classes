// print from 1 - 10 using for loop

// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// print even

// for(let i=1; i<=20; i++) {
//     if(i%2 == 0) {
//         console.log(i);
//     } 
// }

// print all values from the array

// const fruit = ["mango", "apple", "banana"];

// for(let i=0; i<=fruit.length; i++) {
//     console.log(fruit[i]);
// }


// count number greater than 10;

// const num = [1,5,10,11,11,11];
// let count = 0;

// for(let i=1; i<=num.length; i++) {
//     if(num[i] > 10) {
//         count += 1;
//     }
// }
// console.log(count);


// reverse an array.

// let rev = ["1","2", "3"];

//     for(let j=rev.length -1 ; j>=0; j--) {
//         console.log(rev[j]);
        
// }

// console.log(rev.length)























// DOM
let inputBox = document.getElementById("input_box");
let heading1 = document.getElementById("heading1");

inputBox.addEventListener("input", () => {
    heading1.textContent = inputBox.value;
    count1.textContent = inputBox.value.length;
})


let updateBtn = document.getElementById("update_button");
let updateBtn2 = document.getElementById("update_button2");
let h2 = document.getElementById("h2");
let count = 0;

updateBtn.addEventListener("click", () => {
    count++;
    h2.innerHTML = `Clicked: ${count}`;
})

updateBtn2.addEventListener("click", () => {
    count--;
    h2.innerHTML = `Clicked: ${count}`;
})


const textInput = document.getElementById("textInput");
const count1 = document.getElementById("count");

textInput.addEventListener("input", function() {
    count1.textContent = textInput.value.length;
});

