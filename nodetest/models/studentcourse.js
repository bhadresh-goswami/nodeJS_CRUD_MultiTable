

//step 10
const mongoose = require('mongoose');

const studentCourseSchema = mongoose.Schema({
    studentId:{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}],
        required:true
    },
    courseId:{
        type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}],
        required:true
    },
    date_reg:{
        type:String,
        required:true
    },
    paid:{
        type:Number,
        required:true
    }
});

const StudentCourse = module.exports = mongoose.model('StudentCourse',studentCourseSchema);

//************** */