const ProjectController = require('../controllers/mongoose.controller')

module.exports = app => {
    app.get("/api/message", ProjectController.message)
    app.get("/api/projects", ProjectController.allProjects)
    app.get("/api/projects/:id", ProjectController.oneProject)
    app.post("/api/projects", ProjectController.createProject)
    app.put("/api/projects/:id", ProjectController.updateProject)
    app.delete("/api/projects/:id", ProjectController.deleteProject)
}