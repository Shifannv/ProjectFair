// import mongoose
const mongoose = require('mongoose')

// 2 get  connectionstring
const connectionstring = process.env.connectionstring

//3 define connection
mongoose.connect(connectionstring).then(res=>{
    console.log("pfserver connected with mongoDB");
    
}).catch(err=>{
    console.log("Error",+err);
    
})