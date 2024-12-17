// imp mongoose
const mongoose = require('mongoose')

// 2 schema creation 
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
    },
    userId:{
        type:String,
    }

})


// 3 Model creation/excact same as mongodb collection
const projects = mongoose.model('projects',projectSchema)
// export user
module.exports=projects