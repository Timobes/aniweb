const db = require('../db')

class tagController {

    async getTags(req, res) {
        const get = await db.query('SELECt * FROM tags')
        res.json(get.rows)
    }

    async getOneTag (req, res) {
        const id = req.params.id
        const get = await db.query('SELECT * FROM tags WHERE id = $1', [id])

        res.json(get.rows)
    }

    async createTag (req, res) {
        const {name} = req.body
        const create = await db.query('INSERT into tags(name) VALUES ($1)', [name])
        res.json(create.rows)
    }

    async deleteTag (req, res) {
        const {id} = req.body
        const del = await db.query('')
        
        res.json(del.rows)
    }

    async renameTag (req, res) {
        const {name} = req.body
        const rename = await db.query('')

        res.json(rename.rows)
    }
}

module.exports = new tagController;