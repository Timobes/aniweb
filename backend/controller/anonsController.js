const db = require('../db')

class anonsController {

    async getAnons (req, res) {
        const get = await db.query(`SELECT * FROM anons`)
        res.json(get.rows)
    }

    async getOneAnons (req, res) {
        const id = req.params.id
        const get = await db.query(`SELECT * FROM anons WHERE id = $1`, [id])
        res.json(get.rows)
    }

    async createAnons(req, res) {
        const {animeurl, name, altername, description, dates} = req.body
        const create = await db.query('INSERT INTO anons(animeurl, name, altername, description, dates) VALUES ($1, $2, $3, $4, $5)', [animeurl, name, altername, description, dates])
        res.json(create.rows)
    }

    async delAnons (req, res) {
        const id = req.params.id
        const del = await db.query('', [id])
        res.json(del.rows)
    }

    async updateAnons (req, res) {
        const {} = req.body
        const up = await db.query(`SELECT * FROM anons`)
        res.json(get.rows)
    }
}

module.exports = new anonsController;