const express = require('express');
require('./config');
const student = require('./students');

const app = express();
app.use(express.json())

app.delete("/delete/:_id", async(req,res)=>{
    // const data = await student.deleteOne({ _id: '6551be71ff7041c5d8571917' });
    const data = await student.deleteOne(req.params)
    res.send(data);
    console.log(data)
})
app.listen(80)