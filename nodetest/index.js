//step 1

var express = require('express');
var body = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var app = express();

const port = 3000;
//***************/

//step 5

app.use(cors());
app.use(body.json());

//************* */

//step 4
const route = require('./routes/route');

app.use('/api', route);
//**************** */


//step 10 add mongoose connectio here

mongoose.connect('mongodb://localhost:27017/studentlist');

//create events for manage connection
mongoose.connection.on('connected', () => {
    console.log('database connected @27017!');
});
mongoose.connection.on('error', (err) => {

    if (!err) {
        console.log('database connected @27017!');
    }
    else{
        console.log(`error to connecte database @27017 with error: ${JSON.stringify(err,undefined,2)}`);
    }

});

//*************** */

//step 11 at route.js file save, list student data




//step 6

app.use(express.static(path.join(__dirname, 'public')))

//************* */

//step 7 : in routes.js file


//step 3
//test app using following
app.get('/', (req, res) => {

    console.log('Running !');

});
//*****************/

//step 2

app.listen(port, () => {
    console.log(`running app on ${port}!`)
});
//***************/