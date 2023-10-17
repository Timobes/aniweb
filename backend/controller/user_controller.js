const db = require('../db')

class controller {
    
    async getUser(req, res) {
        const users = await db.query('SELECT * from users')
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query( "select * from users where id = $1", [id]);

        res.json(user.rows[0])
    }

    async reg(req, res) {    
        if(req.cookies.userId) {
            res.json('Вы уже авторизованы!')
        }

        else {                
            const {nickname, email, password, age} = req.body
            const reemail = await db.query('SELECT email from users where email = $1', [email]) 

            try{
                if(email == reemail.rows[0].email) {
                    res.json('Такая почта уже есть!')
                    console.log("Повторение почты: ",reemail.rows[0].email, email)
                } 

                else {
                    const newUser = await db.query(`INSERT INTO users (nickname, email, password, age) values ($1, $2, $3, $4) returning *`, [nickname, email, password, age]) 
                    res.json(newUser.rows[0])
                }
            }

            catch(err){
                console.log(err)
                res.json("Заполните все поля!")
            }
        }
        // try{
            // if(email == reemail.rows[0].email) {
            //     res.json('Такая почта уже есть!')
            //     console.log("Повторение почты: ",reemail.rows[0].email, email)
            // } 

            // else {
                const newUser = await db.query(`INSERT INTO users (nickname, email, password, age) values ($1, $2, $3, $4) returning *`, [nickname, email, password, age]) 
                res.json(newUser.rows[0])
            // }
        // }

        // catch(err){
        //     console.log(err)
        //     res.json("Заполните все поля!")
        // }
    }

    async auth(req, res) {
        const {email, password} = req.body
        const reauth = await db.query('SELECT email,password from users where email = $1 AND password = $2', [email, password])
        let id = await db.query('SELECT id from users WHERE email = $1 AND password = $2', [email, password])
        const reemail = await db.query('SELECT email from users') 
        const repas = await db.query('SELECT password from users')

        try{
            if (email == reauth.rows[0].email && password == reauth.rows[0].password) {
                
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


        // else {
        //     res.json('Ошибка!')
        // }
        // for(let i; i < reauth.length; i++) {
        //     console.log(reemail.rows[i].email)
        //     console.log(reemail.rows[i].password)
        // }
        // console.log(reemail.rows.length)

        // console.log(reauth.rows[0])
        // console.log(reauth.rows[0].email, reauth.rows[0].password)
        // console.log(email, password)
    }
    
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query( "DELETE from users WHERE id = $1", [id]);
        
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        // const id = req.params.id
        const {nickname, id} = req.body
        // const user = await db.query( "SELECT nickname from users WHERE id = $1", [id]);
        const update = await db.query("UPDATE users SET nickname = $1 WHERE id = $2",[nickname, id])
        res.json(update.rows[0])
    }

    async getCook(req, res) {
        const id = req.cookies.userId
        // console.log('Cookie: ', );
        const username = await db.query('SELECT nickname FROM users WHERE id = $1 ', [id])
        console.log() 
        res.send(`Hello ${username.rows[0].nickname}!`);
    }
}

module.exports = new controller;