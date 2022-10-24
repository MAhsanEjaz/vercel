const express = require('express');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/routes', (req, res)=>{

    res.send('Hello how r you?');

})



app.listen(PORT);