const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    studentNo: {
        type: String,
        requried: true
    },
    eMail: {
        type: String,
        requried: true
    } 

})

module.exports = mongoose.model('Student', studentSchema)