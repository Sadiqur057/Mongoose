// include schemas

const mongoose = require('mongoose');
const studSchema = new mongoose.Schema({
    name: String,
    dept: String,
    cgpa: Number,
})
module.exports = mongoose.model('students',studSchema)