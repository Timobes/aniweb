const db = require('../db')

class bookController {

    async getBook(req, res) {
        if (req.cookies.userid) {
            const id = req.cookies.userid
            const get = await db.query(`
                SELECT * from bookmarks
                    INNER JOIN  users ON bookmarks.userid = users.id 
                        INNER JOIN  anime ON bookmarks.animeid = anime.id
                            WHERE users.id = $1`, [id])
            res.json(get.rows)
        } else {
            res.json('вы не авторизированы!')
        }
    }

    async addBook(req, res) {
        if (req.cookies.userid) {
            const id = req.cookies.userid
            const animeid = req.params.id
            const add = await db.query("INSERT INTO bookmarks(userid, animeid) VALUES ($1, $2)", [id, animeid])
            res.json(add.rows)
        }   
        else {
            res.json('вы не авторизированы!')
            console.log(req.cookies.userid)
        }
    }

    async remBook(req, res) {
        try {
            if (req.cookies.userid) {
                const id = req.cookies.userid
                const animeid = req.params.id

                console.log('id = ', id, 'anime = ', animeid)

                const rem = await db.query('DELETE FROM bookmarks WHERE userid = $1 AND animeid = $2', [id, animeid])

                res.json(rem.rows)
            } else {
                res.json('вы не авторизированы!')
            }
        } catch (err) {
            console.log(err)
        }

    }
}

module.exports = new bookController;