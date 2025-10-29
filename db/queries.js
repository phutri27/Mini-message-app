const pool = require('./pool')

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages")
    console.log(rows)
    return rows
}

async function insertMessage(author, message, date){
    await pool.query("INSERT INTO messages (author, message, date) VALUES ($1, $2, $3)", [author, message, date])
}

async function deleteUser(id){
    await pool.query("DELETE FROM messages WHERE id = ($1)", [id])
}

module.exports ={
    getAllMessages,
    insertMessage,
    deleteUser
}