const db = require('../db')

class userController {
    async getUser(req, res) {
        const users = await db.query('SELECT * from users')
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        // const id = req.params.id
        const id = req.cookies.userid
        const user = await db.query("select * from users where id = $1", [id]);

        res.json(user.rows[0])
    }
    
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query( "DELETE from users WHERE id = $1", [id]);
        
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {username, id} = req.body
        const update = await db.query("UPDATE users SET username = $1 WHERE id = $2",[username, id])
        res.json(update.rows[0])
    }
}

module.exports = new userController;