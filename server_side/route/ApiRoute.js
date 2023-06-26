const express = require('express');
const route = express.Router();
const controller = require('../controller/ApiController')

route.post('/addUser', controller.addUser)
route.get('/getUser', controller.getuser)
route.get('/edit/:id',controller.edit)
route.put('/updateUser/:id', controller.Userupdate)
route.delete('/deleteUser/:id', controller.deleteUser)


module.exports = route;