const db = require('../db')
const fs = require("fs");

class fileController {
    async uploadImg(req, res) {
        console.log(req.file)
        const namesFile = req.file.originalname 
        const up = await db.query('INSERT INTO files(name) VALUES ($1)', [namesFile])

        res.json({
            up,
            url: `localhost:8080/images/${req.file.originalname}`,
        })
    }   

    async getImg(req, res) {
        try{
            const id = req.params.id
            const img = await db.query('SELECT * FROM files WHERE id = $1', [id])

            // const sendimg = null

            console.log(img.rows[0].name)

            fs.stat(`./images/${img.rows[0].name}`, function(err, stats) {
                if (err) {
                    console.log("Файл не найден");
                } else {
                    console.log("Файл найден");
                }
            });

            res.json({
                url: `http://localhost:8080/images/${img.rows[0].name}`,
            })
        }
        catch(err){
            res.send('Нет id!')
            console.log(err)
        }
    }
    
    async getAllImg(req, res) {
        const files = await db.query('SELECT * FROM files')
        res.json(files.rows)
    }
}

module.exports = new fileController;