const ApplicationMiddleWare=(req,res,next)=>{
    console.log("Inside ApplicationMiddleWare ");
    next();
}
module.exports=ApplicationMiddleWare