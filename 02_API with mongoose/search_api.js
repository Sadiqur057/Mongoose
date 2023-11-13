const express = require('express');
require('./config');
const student = require('./students');
const app = express();

app.use(express.json())

app.get("/search/:key", async(req,res)=>{
    let data = await student.find(
        {
            "$or":[
                {
                    "name":{$regex:req.params.key}
                },
                {
                    "dept":{$regex:req.params.key}
                }
            ]
        }
    )
    res.send(data);
})
app.listen(80)