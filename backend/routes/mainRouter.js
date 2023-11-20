const Router = require('express')
const router = new Router()

const postRouter = require('./all_routes/postsRouter')
const userRouter = require('./all_routes/userRouter')
const regRouter = require('./all_routes/regRouter')
const animeRouter = require('./all_routes/animeRouter')
const tagsRouter = require('./all_routes/tagsRouter')
const anonsRouter = require('./all_routes/anonsRouter')
const bookRouter = require('./all_routes/bookmarksRouter')


router.use('/post', postRouter)
router.use('/user', userRouter)
router.use('/auth', regRouter)
router.use('/anime', animeRouter)
router.use('/tag', tagsRouter)
router.use('/anons', anonsRouter)
router.use('/book', bookRouter)

module.exports = router 