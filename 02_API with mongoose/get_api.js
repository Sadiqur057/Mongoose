const express = require('express');
require('./config');
const student = require('./students');

const app = express();
app.use(express.json())

// get records from mongodb
app.get("/", async(req,res)=>{
    let data = await student.find()
    res.send(data);
})
app.listen(80)