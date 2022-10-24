const express = require('express');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/routes', (req, res)=>{


    res.json({
        "message": "What is your name",
        "image": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    })


})



app.listen(PORT);