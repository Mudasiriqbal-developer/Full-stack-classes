import express from 'express';
import User from './models/Users.Models.js'
import cors from 'cors';
import db from './config/database.js'
import fs from 'fs';
import { log } from 'console';
import bcrypt from 'bcrypt';
const PORT = 6166;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-user', async (req, res) => {
    try {
        
        const hashpassword = bcrypt.hashSync(req.body.password, 10);
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword
        })
        console.log(newUser)
        if(!newUser) {
            console.log("Error Occure")
        }
        res.status(201).json(newUser)
    } catch(err) {
        console.log(err)
    }
})


app.post('/hash-word', (req, res) => {
    console.log(req.body.password)
    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log(hash)
    console.log(bcrypt.compareSync(req.body.password, hash));
});

app.post('/login',async (req,res)=>{

    const find_user = await User.findOne({name:req.body.name});
    if(!find_user) res.status(404).json({message:"User Not Found"})
    // console.log(find_user)

    if(find_user.password !== req.body.password){
        res.status(402).json({message:"Password is Not Valid"})
        return;
    }

res.status(200).json({find_user})
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