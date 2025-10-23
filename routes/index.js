const { format } = require("date-fns");
const { Router } = require("express")
const indexRouter = Router();

const date = format(new Date(), 'MM/dd/yyyy')
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date
  }
]

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Messages page", messages: messages, connect: "new"})
})

indexRouter.get("/new", (req, res) => {
    res.render("form", {title: "New Message"})
})

indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.name, user: req.body.message, added: date });
    res.redirect("/")
})

module.exports = indexRouter