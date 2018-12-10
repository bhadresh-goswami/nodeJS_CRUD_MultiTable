

//step 10
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

const Student = module.exports = mongoose.model('Student',studentSchema);

//************** */