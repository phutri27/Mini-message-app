const path = require("node:path")
const express = require("express")
const app = express()
const indexRouter = require('./routes/index')
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)

const PORT = 3000;
app.listen(PORT, (err) =>{
    if (err)
        throw err
    console.log("Messages app developing")
})