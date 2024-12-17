// 1 load env file
require('dotenv').config()//Load .env file into process.env by deafault.

// 2 import express
const express = require('express')
// 6 . cors import
const cors = require('cors')
// 8 import db
const db=require('./DB/connection')
// 9 imp router
const router =require('./Routes/router')
// const ApplicationMiddleWare = require('./Middlewares/AppliationMiddleWare')

// 3 application creation using express
const pfserver = express()

// 7 mmiddleware configuration
pfserver.use(cors())
pfserver.use(express.json())
// pfserver.use(ApplicationMiddleWare)
pfserver.use(router)
// exports image  to frontend
pfserver.use('/uploads',express.static('./uploads'))

//4 define port
const PORT = 3000 ||process.env.PORT

// 5 applin run
pfserver.listen(PORT,()=>{
    console.log("Project fair server started at port :" +PORT);
    
})

pfserver.get('/',(req,res)=>{
    res.send("welcome to pfserver")
})


