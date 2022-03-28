const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "title must be at least 3 characters"]
    },
    price : {
        type: Number,
        required: [true, "price is required"],
        minlength: [0, "price must be positive"]
    },
    description : {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters"]
    }
}, {timestamp : true})

module.exports.Project = mongoose.model('Project', ProjectSchema)