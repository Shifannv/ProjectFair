const mongoose = require('mongoose')

const users = require('../Models/userschema')
const jwt = require('jsonwebtoken')
// Register logic
exports.registerAPI=async(req,res)=>{
        console.log("Inside the Register API");
        const {username,email,password}= req.body
        // if user already in db?
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json({message:"user already Exiting..."})
        }
        else{
            const newUser = new users({
                username:username,
                email:email,
                password:password,
                github:"",
                linkdIn:"",
                profilePic:""

            })
        
        // To save the details in mongodb
        await newUser.save()
        res.status(200).json("registeration successfull...")

}}

// login logic
exports.loginAPI=async(req,res)=>{
    console.log("Inside the login API");
    const {email,password}=req.body
    // if user is already in db
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){

            const token = jwt.sign({userId:existingUser._id},process.env.jwtkey)
            console.log(token);
            
            res.status(200).json({currentUser:existingUser,token})

            
        }
        else{
         
        res.status(404).json("Incorrect email or password ")
    
    }
    }
    catch(err){
        res.status(401).json(err)
    }
    }

    exports.addProjectAPI=async(req,res)=>{
        console.log("inside addProjectAPI");
        
    }
