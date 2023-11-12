const express = require('express');
require('./config');
const student = require('./students');

const app = express();
app.use(express.json())

app.post("/", async(req,res)=>{
    let data = student(req.body)
    let result = await data.save();
    console.log(req.body)
    res.send(result);
})
app.listen(80)