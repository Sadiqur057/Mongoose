const express = require('express');
require('./config');
const student = require('./students');

const app = express();
app.use(express.json())

app.get("/", async(req,res)=>{
    let data = await student.find()
    res.send(data);
})

app.get("/search/:key", async(req,res)=>{
    let data = await student.find(
        {
            "$or":[
                {
                    "name":{$regex:req.params.key}
                }
            ]
        }
    )
    res.send(data);
})


app.post("/create", async(req,res)=>{
    let data = student(req.body)
    let result = await data.save();
    console.log(req.body)
    res.send(result);
})

app.put("/update/:_id", async(req,res)=>{
    let data = await student.updateOne(
        req.params, // condition
        {
            $set: req.body // data
        }
    )
    res.send(data);
})

app.delete("/delete/:_id", async(req,res)=>{
    const data = await student.deleteOne(req.params)
    res.send(data);
    console.log(data)
})

app.listen(80)