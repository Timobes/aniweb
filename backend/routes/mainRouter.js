const Router = require('express')
const router = new Router()

const postRouter = require('./all_routes/postsRouter')
const userRouter = require('./all_routes/userRouter')
const regRouter = require('./all_routes/regRouter')
const animeRouter = require('./all_routes/animeRouter')


router.use('/post', postRouter)
router.use('/user', userRouter)
router.use('/auth', regRouter)
router.use('/anime', animeRouter)

module.exports = router 