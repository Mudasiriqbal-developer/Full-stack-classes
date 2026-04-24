const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

// app.get('/', (request, response) => {
//     response.send('Your request is processed on the...!');
// })

// File system
// fs.writeFileSync('text.txt','this is very nice backend develped...');
// // read file utf-8
// const content = fs.readFileSync('text.txt','utf-8');
// console.log(content);

// // delete file
// setTimeout(() => {
//     fs.unlinkSync('text.txt')
// }, 3000);

fs.writeFileSync('index.html', '<p>this is html file.</p>')
const data = fs.readFileSync('index.html', 'utf-8')
console.log(data)
setTimeout(() => {
    fs.unlinkSync('index.html');
}, 3000)



app.listen(PORT, () => {
    console.log("Express Server Is Running...!"); 
})

