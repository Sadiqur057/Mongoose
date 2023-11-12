const { read } = require('fs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/university")
const studSchema = new mongoose.Schema({
    name:String,
    cgpa:Number ,
    dept:String    
});
const student = mongoose.model('students',studSchema);
