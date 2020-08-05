// instance of the router 
const router = require('express').Router();

/// require the db to pull data from models 
let db = require('../../models')

// this will get all of the task and people associated
router.get('/', (req, res) => {
    res.send('hello this is the employeeTask controller'); 

    db.Employee_Task.findAll({
        include: [
          {
            model: Employee,
            where: {}
          },
          {
            model: Task,
            where: {} 
          }
        ]
      });

}); 



module.exports = router; 