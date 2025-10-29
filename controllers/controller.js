const db = require('../db/queries')
const { body, validationResult, matchedData } = require("express-validator");

const validateInput = [
    body('name').trim()
        .notEmpty().withMessage("name must not be empty")
        .isAlpha().withMessage("name must be alphabetic"),
    body('message').trim()
        .optional().isLength({max: 200})
]

async function getMessage(req, res){
    const messages = await db.getAllMessages()
    res.render("index", {title: "Messages page", messages: messages, connect: "new"})
}

const createMessagePost = [validateInput , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
            title: 'Create Message',
            errors: errors.array()
        })
    }
    const { name, message } = matchedData(req)
    const date = new Date()
    await db.insertMessage(name, message, date)
    res.redirect("/")
}]

async function deleteMessages(req, res){
    const id = req.params.id
    await db.deleteUser(id)
    res.redirect("/")
}

module.exports ={
    getMessage,
    createMessagePost,
    deleteMessages
}