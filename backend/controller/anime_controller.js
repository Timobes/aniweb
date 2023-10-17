const db = require("../db");

class controller {
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
    const { animeurl, name, description, rating, tagsId, numEp } = req.body;
    const newAnime = await db.query(
      `INSERT INTO anime (animeurl, name, description, rating, tagsId, numEp) values ($1, $2, $3, $4, $5, $6) returning *`,
      [animeurl, name, description, rating, tagsId, numEp]
    );
    res.json(newAnime.rows[0]);
  }

  async deleteAnime(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE from anime WHERE id = $1", [id]);

    res.json(user.rows[0], "пользователь удалён");
  }

  async getRan(req, res) {
    let bro = 'https://api.anilibria.tv/v3/title/random'
    let obj = await (await fetch(bro)).json();
    console.log(obj);

    const id = obj.id
    const name = obj.names.ru
    const status = obj.status.string
    const img = obj.posters.original.url
    const ep = obj.type.full_string
    const category = obj.genres
    const desc = obj.description
    const play = obj.player.host

    res.json(`${id} <br > ${name} <br> ${status} <br> ${img} <br> ${ep} <br> ${category} <br> ${desc} <br> ${play}`)
  }

  async getAni(req, res) {
    const id = req.params.id
    console.log(id)
    
    const zp = (`https://api.anilibria.tv/v3/title?id=${id}`)
    console.log(zp)

    const obj = await(await fetch(zp)).json();
    console.log(obj)

    const user_id = obj.id
    const name = obj.names.ru
    const status = obj.status.string
    // const img = obj.posters.original.url
    const ep = obj.type.full_string
    const category = obj.genres
    const desc = obj.description
    // const play = obj.player.host

    res.json(`${user_id} <br > ${name} <br> ${status}  <br> ${ep} <br> ${category} <br> ${desc} `)  
  }

  async getCs(req, res) {
    // const mega = `../static/img/doki.jpg`
    
    // console.log(`${__dirname}`)

    res.sendFile('../static/img/doki.jpg', { root : __dirname })
  }

  // В разработке

  // async updateAnime(req, res) {
  //     // const id = req.params.id
  //     const {nickname, id} = req.body
  //     // const user = await db.query( "SELECT nickname from users WHERE id = $1", [id]);
  //     const update = await db.query("UPDATE users SET nickname = $1 WHERE id = $2",[nickname, id])
  //     res.json(update.rows[0])
  // }


}

module.exports = new controller();
