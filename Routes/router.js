// 1 imp
const express = require('express')

// 3 import user controll
const userController = require('../Controllers/usercontroller')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')

// 2 create router
const router = express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleWare,multerMiddleware.single('projectImg'),projectController.addProjectAPI)

router.get('/api/getAllUserproject',jwtMiddleWare,projectController.getAllUserProject)

router.get('/api/getUserproject',jwtMiddleWare,projectController.getUserProject)

router.get('/api/getHomeproject',projectController.getHomeProject)

router.put('/api/editProject/:ProjectId',jwtMiddleWare,multerMiddleware.single('projectImg'),projectController.editProjectAPI)

router.delete('/api/deleteProject/:ProjectId',jwtMiddleWare,projectController.deleteProjectAPI)

module.exports=router