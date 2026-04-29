import mongoose from 'mongoose';


const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', Userschema);
export default User;