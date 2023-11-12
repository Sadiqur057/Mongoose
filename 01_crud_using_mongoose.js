const { read } = require('fs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/university")
const studSchema = new mongoose.Schema({
    name:String,
    cgpa:Number ,
    dept:String    
});
const student = mongoose.model('students',studSchema);


const createRecords = async() =>{
    let data = new student({
        name:"Samir",
        cgpa:3.32});

    let result = await data.save();
    console.log(result)
}

const readRecords = async() =>{
    const allStudents = await student.find()
    const stud1 = await student.findOne({ name: 'Samir' });
    const stud2 = await student.findById('6550f54398b826f5e316152d');
    console.log(allStudents)
}

const updateRecords = async()=>{
    let data = await student.updateOne(
        { name: 'Samir' },
        { $set: { cgpa: 3.44 } }
      );
    console.log(data);
}
updateRecords()

