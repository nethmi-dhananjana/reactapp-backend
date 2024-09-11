const express=require('express');
const router =express.Router();
const controller = require('./controller');
const {model} = require('mongoose');

router.get('/users',controller.getUsers);
router.post('/createuser',controller.createUser);
router.post("/updateuser",controller.updateUser);
router.post('/delete',controller.deleteUser);

module.exports=router;