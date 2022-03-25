const express = require("express")
const app = express()

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true }));

const Routes = require("./routes/mongoose.routes")
Routes(app)


app.listen(8000, () => console.log("Server port 8000 online"));

