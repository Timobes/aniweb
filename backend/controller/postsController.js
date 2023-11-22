const db = require('../db')

class postController {

    async getPost(req, res) {
        const bro = await db.query(`SELECT * FROM posts`)
        res.json(bro.rows)
    }
    
    async getOnePost(req, res) {
        const id = req.params.id
        const post = await db.query("select * from posts where id = $1", [id]);

        res.json(post.rows[0])
    }

    async delOnePost(req, res) {
        const id = req.params.id
        const del = await db.query("DELETE FROM posts WHERE id = $1", [id])

        res.json(del.rows)
    }

    async createPost(req, res) {
        const {author, url, title, texts, dates} = req.body
        const create = await db.query('INSERT INTO post(author, url, title, texts, dates) VALUES ($1, $2, $3, $4, $5)', [author, url, title, texts, dates])

        res.json(create.rows)
    }

    async updatePost(req, res){
        const id = req.params.id
        const {} = req.body
        const update = await db.query('', [])

        res.json(update.rows)
    }

    async getComment(req, res) {
        const id = req.params.id
        const com = await db.query(`
            SELECT pos.title, pc.comm, us.username 
                FROM posts pos
                    JOIN postcom pc ON postsid = pos.id
                        JOIN users us ON pc.author = us.id
                            WHERE pos.id = $1        
        `, [id])
        res.json(com.rows)
    }

    async sendComment(req, res) {
        const id = req.params.id
        const user = req.cookies.userid
        const {comm} = req.body

        const send = await db.query('INSERT INTO postcom(postsid, author, comm) VALUES ($1, $2, $3)', [id, user, comm])

        console.log(send)

        res.json(send.rows)
    }

}

module.exports = new postController;