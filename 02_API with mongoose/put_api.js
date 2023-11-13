const express = require('express');
require('./config');
const student = require('./students');

const app = express();
app.use(express.json())

app.put("/update/:_id", async(req,res)=>{
    let data = await student.updateOne(
        req.params, // condition
        {
            $set: req.body // data
        }
    )
    res.send(data);
})
app.listen(80)