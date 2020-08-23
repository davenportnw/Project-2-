const router = require("express").Router(); 


//require the db to pull from employee models
let employee = require('../../models/employee');
let db = require('../../config/config');


router.get('/', (res,req) => {
    console.log("You're in the directory page");
   
    res.render('directory');
});
module.exports = router;