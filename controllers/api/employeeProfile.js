const mysql = require('../../config/config');
const router = require('express').Router();
const employee = require('./employee');
const bcrypt = require('bcryptjs');


router.get('/', function(req,res){
    let query = 'UPDATE employee SET full_name = "?"  WHERE email = "?";'
    let fullname = 'SELECT full_name FROM employee WHERE id = "?" ';
    let key = req.params.id;
    console.log('fullname', fullname);
    mysql.query(query, [key], function(err){
        if(err) throw err;
    }).then(function() {
        res.json(fullname);
    })
    // let data = employee.findOne({where: {full_name: key}});
});

module.exports = router 