

//step 10
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }
});

const Course = module.exports = mongoose.model('Course',courseSchema);

//************** */