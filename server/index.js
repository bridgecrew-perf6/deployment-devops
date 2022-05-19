//BoilerPlate code

const express = require('express');
const path = require('path');

const app = express();

//Middleware
app.use(express.static(path.join(__dirname, '../client')))

//Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})

//Port information
const port = process.env.PORT|| 4001;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})