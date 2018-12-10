//step 7

const express = require('express');
const router = express.Router();

module.exports = router;

//###################StudentModel#######################
//step 11 at route.js file save, list student data
const Student = require('../models/student');
const Course = require('../models/course');
const StudentCourse = require('../models/studentcourse');

//******************* */

//#region student model

router.get('/students', (req, res, err) => {
    //res.send('getting student list...'); 

    //step 11.a
    Student.find(function (err, studentData) {
        res.json(studentData);
    });
    //_____________ */

});

//**************** */

//step 8 install nodemon

//step 9
//post student
router.post('/student', (req, res, next) => {

    //console.log(req.body.country);
    //step 11.b
    let std = new Student({
        name: req.body.name,//'bhadresh gosai',
        country: req.body.country,//'india',
        gender: req.body.gender,//'Male',
        image: req.body.image//'new.png'
    });

    std.save((err, student) => {
        if (!err) {
            res.json({ msg: 'data saved!', data: student });
        }
        else {
            res.json({ err: `${err}` });
        }
    });
    //________________ */

});

//remove student
router.delete('/student/:id', (req, res, next) => {
    var id = req.params.id;
    console.log(id);
    //res.json({id: ObjectID(req.param.id)});

    //step 11.c
    Student.deleteOne({ _id: id }, function (err, result) {
        //   res.json({id:req.param.id});
        if (!err) {
            res.json(result);

        }
        else {
            res.json(err);
        }
    });
    //___________ */
});


//update student
router.put('/student/:id', (req, res, next) => {

    //console.log(req.body.country);
    //step 11.d

    var id = req.params.id;

    let std = new Student({
        _id: id,
        name: req.body.name,//'bhadresh gosai',
        country: req.body.country,//'india',
        gender: req.body.gender,//'Male',
        image: req.body.image//'new.png'
    });

    Student.updateOne({ _id: id }, std, function (err, result) {
        if (!err) {
            res.json({ msg: 'data updated!', data: result });
        }
        else {
            res.json({ err: `${err}` });
        }
    });
    /*

    std.save((err,student)=>{
        if(!err)
        {
            res.json({msg:'data saved!',data:student});
        }
        else{
            res.json({err:`${err}`});
        }
    });
    */

    //________________ */

});
/************** */
//#endregion
//######################Course Model End#####################

//#region courses
router.get('/courses', (req, res, err) => {
    //res.send('getting student list...'); 

    //step 11.a
    Course.find(function (err, result) {
        res.json(result);
    });
    //_____________ */

});


router.post('/course', (req, res, next) => {

    //console.log(req.body.country);
    //step 11.b
    let course = new Course({
        name: req.body.name,
        fees: req.body.fees
    });

    course.save((err, result) => {
        if (!err) {
            res.json({ msg: 'data saved!', data: result });
        }
        else {
            res.json({ err: `${err}` });
        }
    });
    //________________ */

});

//############################End Course Model##################
//#endregion

//#region Student Course data
//######################START STUDENT COURSE MODEL################



router.get('/studentcourses', (req, res, err) => {
    //res.send('getting student list...'); 

    //step 11.a
    // StudentCourse.find(function(err,result){
    //     res.json(result);
    // });
    //_____________ */
    StudentCourse.find().populate('studentId').exec(function (err, studentsresult) {
        if (err) {
            res.json({error:err});
        }
        else {
            var regdate = [];
            // studentsresult.forEach(function (std) {
            //     std.Student.forEach(function (s) {
            //         adTimes.push(s);
            //     });
            // });

            res.json(studentsresult); // adTimes should contain all addTimes from his friends
        }
    });
    //     var list = [];
    //     var listdata = function(){StudentCourse.find(function (err, result) {
    //         result.forEach((val,index)=>{
    //             Student.findById({_id:val.studentId},(err,studnetResult)=>{
    //                 list.push(studnetResult);
    //                 console.log(list);
    //             });
    //             //console.log(val.date_reg);
    //         });


    //     });
    //     return list;       
    // }

    //     res.json(listdata());
});


router.post('/studentcourse', (req, res, next) => {

    //console.log(req.body.country);
    //step 11.b
    let studentcourse = new StudentCourse({
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        date_reg: req.body.date_reg,
        paid: req.body.paid
    });

    studentcourse.save((err, result) => {
        if (!err) {
            res.json({ msg: 'data saved!', data: result });
        }
        else {
            res.json({ err: `${err}` });
        }
    });
    //________________ */

});


//######################End STUDENT COURSE MODEKL#################
//#endregion

//step 10 in model folder student.js file
