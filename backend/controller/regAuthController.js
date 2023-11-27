const db = require('../db')

class regController {
    async reg(req, res) {    
        if(req.cookies.userid) {
            res.json('Вы уже авторизованы!')
        }

        else {                
            const {username, email, passwords, bio, dates} = req.body
            // const reemail = await db.query('SELECT email from users where email = $1', [email]) 

            try{
                // if(email == reemail.rows[0].email) {
                    // res.json('Такая почта уже есть!')
                    // console.log("Повторение почты: ",reemail.rows[0].email, email)
                // } 

                // else {
                    const newUser = await db.query(`INSERT INTO users (username, email, passwords, bio, dates) values ($1, $2, $3, $4, $5)`, [username, email, passwords, bio, dates]) 
                    res.json('Вы зарегистрировались!')
                // }
            }

            catch(err){
                console.log(err)
                res.json("Заполните все поля!")
            }
        }

        // const newUser = await db.query(`INSERT INTO users (username, email, passwords, bio, dates) values ($1, $2, $3, $4, $5)`, [username, email, passwords, bio, dates]) 
        // res.json(newUser.rows[0])
    }

    async auth(req, res) {
        const {email, passwords} = req.body
        const reauth = await db.query('SELECT email,passwords from users where email = $1 AND passwords = $2', [email, passwords])
        console.log('reath = ', reauth)
        let id = await db.query('SELECT id from users WHERE email = $1 AND passwords = $2', [email, passwords])
        try{
            if (email == reauth.rows[0].email && passwords == reauth.rows[0].passwords) {
                
                res.clearCookie('userid');
                res.cookie('userid', id.rows[0].id)
                res.json('Добро пожаловать!')

            } else {
                res.json('ошибка')
            }
        }
        catch(err) {
            console.log(err)
            res.json("Ошибка")
        }
    }

    async getCook(req, res) {
        const id = req.cookies.userid
        const username = await db.query('SELECT username FROM users WHERE id = $1 ', [id])
        res.send(`Hello ${username.rows[0].username}!`);
    }
}

module.exports = new regController;