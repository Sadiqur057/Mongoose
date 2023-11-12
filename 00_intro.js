// install => npm i mongoose
const mongoose = require('mongoose');

const main = async() =>{
    await mongoose.connect("mongodb://localhost:27017/university") // connected to university database
    const studSchema = new mongoose.Schema({
        name:String,
        cgpa:Number     
    });
    const studModal = mongoose.model('students',studSchema);
    let data = new studModal({name:"Samir",cgpa:3.32});
    let result = await data.save();
    console.log(result)
}

main()