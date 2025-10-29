const { format } = require("date-fns");
const controller = require("../controllers/controller")
const { Router } = require("express")
const indexRouter = Router();

indexRouter.get("/", controller.getMessage)

indexRouter.get("/new", (req, res) => {
    res.render("form", {title: "New Message"})
})

indexRouter.post("/new", controller.createMessagePost)
indexRouter.post("/:id/delete", controller.deleteMessages)
module.exports = indexRouter