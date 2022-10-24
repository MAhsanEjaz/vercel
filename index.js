const express = require('express');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/routes', (req, res)=>{


    res.json({
        "message": "What is your name"
    })


})



app.listen(PORT);