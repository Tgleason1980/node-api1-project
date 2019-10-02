// implement your API here
const express = require('express');
const db = require('./data/db.js');
const server = express();

//middleware
server.use(express.json());
//request handler

server.get('/api/users',(req, res)=>{
    db.find()
    .then(users =>{
        res.json(users);
    })
    .catch(err =>{
        res.status(500).json({
            err: err
        })
    })
});

server.post('/api/users',(req, res)=>{
    const newUser = req.body;
    db.insert(newUser)
    .then(user =>{
        res.status(201).json(user);
    })
    .catch(err =>{
        res.status(500).json({
            err: err
        })
    })
});

server.delete('/api/users/:id', (req, res)=>{
    const {id} = req.params;
    db.remove(id)
    .then (deletedUser => {
        if (deletedUser) {
            res.json(deletedUser);
        }else{
            res.status(404).json({
                message: 'The user with the specified ID does not exist.'
            })
        }
    })
})

server.put('/api/users/:id',(req, res)=>{
const {id} = req.params;
const data = req.body;
db.update(id, data)
.then(updated =>{
    if (updated) {
        res.json(updated);
    }else{
        res.status(404).json({
            message: 'The user information could not be modified.'
        })
    }
})
})

server.get('/api/users/:id', (req, res)=>{
    const {id} = req.params;
    db.findById(id)
    .then(singleUser =>{
        res.json(singleUser);
    })
    .catch(err =>{
        res.status(500).json({
            err: err
        })
    })
})


server.listen(5000, () =>{
    console.log('server is running on port 5000...');
});