const projects = require('../Models/projectSchema')

exports.addProjectAPI=async(req,res)=>{
    console.log("Inside and ProjectAPI");
    
    const {title,language,github,website,overview}=req.body
    const projectImg = req.file.filename //frpm middleware
    const userId = req.payload //from jwt middleware
    console.log(projectImg);

    console.log(title,language,github,website,overview,userId);
       
    try{
        console.log("Insert Try");
        
        const project = await projects.findOne({github})
        if(project){
            res.status(401).json("Project already existing")
        }    
    else{
        const newproject = new projects({title,language,github,website,overview,projectImg,userId})
        await newproject.save()
        res.status(200).json(newproject)
      }
    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.getHomeProject=async(req,res)=>{
    try{
        const response = await projects.find().limit(3)
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.getUserProject=async(req,res)=>{
    const userId = req.payload
    try{
        const response = await projects.find({userId})
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)
    }
}
exports.getAllUserProject=async(req,res)=>{
    try{
        const response = await projects.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)
    }
}
// edit project
exports.editProjectAPI=async(req,res)=>{
    console.log("Inside edit ProjectAPI");
    
    const {title,language,github,website,overview,projectImg}=req.body
    const updateImg =req.file? req.file.filename : projectImg //frpm middleware
    const userId = req.payload //from jwt middleware
    const {projectId}=req.params
    console.log(updateImg);
    console.log(title,language,github,website,overview,userId);
       
    try{
        console.log("Insert Try");
        const project = await projects.findByIdAndUpdate(
            {_id:projectId},
     {
       title:title,
       language:language,
       github:github,
       website:website,
       overview:overview,
       projectImg:projectImg,
     }
        )
        await project.save()
        res.status(200).json(project)
    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.deleteProjectAPI=async(req,res)=>{
    console.log("Inside delete API");
    const {projectId}=req.params
console.log(projectId);
try{
    const project = await projects.findByIdAndDelete({_id:projectId})
    res.status(200).json(project)
}
catch(err){
    res.status(406).json(err)
}
}