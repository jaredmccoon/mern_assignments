const express = require("express")
const cors = require('cors')
const app = express()


require("./configs/mongoose.config")
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));


require("./routes/mongoose.routes")(app)

app.listen(8000, () => console.log("server port 8000 online"));