const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (request, response) => {
    response.send('Your request is processed on the...!');
})

app.listen(PORT, () => {
    console.log("Express Server Is Running...!"); 
})