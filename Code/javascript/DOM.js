const ul = document.getElementById("ul");
const btn = document.getElementById("btn");
const fruits = ["Mongo", "Banana", "Apple"];
for(let n=0; n<=3; n++) {
    const accessLi = document.createElement("li");
    accessLi.innerText = fruits[n];
    ul.appendChild(accessLi);

    accessLi.addEventListener('click', () => {
        fruits[n].pop();     
})

}




// const inpBox = document.getElementById('inp-box');
// const removeBtn = document.getElementById('removeBtn');
// const addBtn = document.getElementById('addBtn');
