import express from 'express';
import User from './models/Users.Models.js'
import cors from 'cors';
import db from './config/database.js'
import fs from 'fs';
import { log } from 'console';
const PORT = 6166;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-user', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        if(!newUser) {
            console.log("Error Occure")
        }
        res.status(201).json(newUser)
    } catch(err) {
        console.log(err)
    }
})


db();
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

fs.writeFileSync('index.html', 'this is html file.')
const data = fs.readFileSync('index.html', 'utf-8')
console.log(data)
setTimeout(() => {
    fs.unlinkSync('index.html');
}, 3000)

app.listen(PORT, () => {
    console.log("Express Server Is Running...!"); 
})