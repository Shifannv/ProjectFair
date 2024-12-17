// imp mongoose
const mongoose = require('mongoose')

// 2 schema creation 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    profilepic:{
        type:String,
    }

})


// 3 Model creation/excact same as mongodb collection
const users = mongoose.model('users',userSchema)
// export user
module.exports=users