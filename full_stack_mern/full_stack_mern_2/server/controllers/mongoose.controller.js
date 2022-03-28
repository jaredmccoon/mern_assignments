// const { response } = require("express")
const { Project } = require("./../models/mongoose.model")

module.exports.message =( req, res)=>{
    res.json({message: "message from backend"})
}


module.exports.allProjects =( req, res)=>{
    Project.find()
        .then(Project => res.json(Project))
        .catch(err=>res.json(err))
}
module.exports.oneProject =( req, res)=>{
    const id = req.params.id
    Project.findOne({_id: id})
    .then(Project => res.json(Project))
    .catch(err => res.json(err))
}
module.exports.createProject =( req, res)=>{
    Project.create(req.body)
        .then(response=>res.json(response))
        .catch(err=>res.json(err))
}
module.exports.updateProject =( req, res)=>{
    const id = req.params.id
    Project.findOneAndUpdate(
        {_id: id},
        req.body,
        { new: true, runValidators:true}
    )
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}
module.exports.deleteProject =( req, res)=>{
    Project.deleteOne({_id: req.params.id})
        .then(response=>res.json(response))
        .catch(err=>res.json(err))
}