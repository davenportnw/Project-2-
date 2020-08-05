// instance of the router 
const router = require('express').Router();
const employee = require('./employee');

/// require the db to pull data from models 
let db = require('../../models')

// all employees 
router.get('/', async (req, res) => {
    let data = await db.Employee.findAll({});
    await res.json(data);
});

router.get('/single/:id', async (req, res) => {
    let key = req.params.id;
    let employee = await db.Employee.findOne({ where: { id: key } });
    await res.json(employee);
});

//post a user , route => ('api/invitation')
router.post('/', async function (req, res) {
    let key = req.body; 
    console.log(key)
    db.Employee.create({
        full_name: key.full_name,
        email: key.email,
        salary: key.salary, // okay this should pass now 
        phone_number: key.phone_number,
        password: key.password,
        role_ID: key.role_ID
    })
    .then((response) => {
        res.json(response);
    })
    .catch((err) => { 
        console.log(err.message); 
    })
 
});

// update user by id 
router.put('/:id', async function (req, res) {
    let response = await db.Employee.update(
        {
            task: req.body.task,
        },
        {
            where: {
                id: req.params.id,
            },
        },
    )

    res.json(response);

});

// delete Task by id 
router.delete('/:id', async function (req, res) {

    let response = await db.Employee.destroy({
        where: {
            id: req.params.id,
        },
    })
    await res.json(response);

});

// [DONE]
router.get('*',async function (req, res) {
        res.redirect('/api/employee');
});


module.exports = router; 