// const Joke = require("./../models/mongoose.model")


const { response } = require("express")
const {Joke} = require("./../models/mongoose.model")


module.exports.allJokes =( req, res)=>{
    Joke.find()
        .then(Joke => res.json(Joke))
        .catch(err=>res.json(err))
}
module.exports.oneJoke =( req, res)=>{
    const id = req.params .id
    Joke.findOne({_id: id})
    .them(get => res.json(pet))
    .catch(err => res.json(err))
}
module.exports.createJoke =( req, res)=>{
    Joke.create(req.body)
        .then(response=>res.json(response))
        .catch(err=>res.json(err))
}
module.exports.updateJoke =( req, res)=>{
    const id = req.params.id
    Joke.findOneAndUpdate(
        {_id: id},
        req.body,
        { new: true, runValidators:true}
    )
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}
module.exports.deleteJoke =( req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(response=>res.json(response))
        .catch(err=>res.json(err))
}
