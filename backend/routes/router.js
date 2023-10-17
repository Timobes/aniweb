const Router = require('express')
const router = new Router()
const user_controller = require('../controller/user_controller')
const anime_controller = require('../controller/anime_controller')

// User

router.get('/users', user_controller.getUser)
router.get('/user/:id', user_controller.getOneUser)
router.post('/reg', user_controller.reg)
router.post('/auth', user_controller.auth)

router.delete('/user/del/:id', user_controller.deleteUser)
router.put('/user/up', user_controller.updateUser)
router.get('/cook', user_controller.getCook)


module.exports = router 