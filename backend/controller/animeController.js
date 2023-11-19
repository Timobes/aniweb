const db = require("../db");

class animeController {
  async getAnime(req, res) {
    const anime = await db.query("SELECT * from anime");

    res.json(anime.rows);
  }

  async getOneAnime(req, res) {
    const id = req.params.id;
    const anime = await db.query("select * from anime where id = $1", [id]);

    res.json(anime.rows[0]);
  }

  async createAnime(req, res) {
    const { animeurl, studiourl, name, altername, description, rating, numEp, dates } = req.body;
    const newAnime = await db.query(`INSERT INTO anime (animeurl, studiourl, name, altername, description, rating, numEp, dates) values ($1, $2, $3, $4, $5, $6, $7)`, 
      [animeurl, studiourl, name, altername, description, rating, numEp, dates]
    );
    res.json(newAnime.rows[0]);
  }

  async deleteAnime(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE from anime WHERE id = $1", [id]);

    res.json(user.rows[0], "пользователь удалён");
  }

  async updateAnime(req, res) {

  }

  async getRev(req, res) {
    const id = req.params.id
    const rev = await db.query(`
      SELECT ani.name, ar.review, us.username 
	      FROM anime ani
		      JOIN animerev ar ON animeid = ani.id
			      JOIN users us ON ar.author = us.id
				      WHERE ani.id = $1`, [id])
    res.json(rev.rows)
  }

  async sendRev(req, res) {
    const id = req.params.id
    const user = req.cookies.userid
    const {review} = req.body

    const send = await db.query('INSERT INTO	animerev(animeid, author, review) VALUES ($1, $2, $3)', [id, user, review])
    
    res.json(send.rows)
  }

}

module.exports = new animeController;
