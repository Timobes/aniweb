const Router = require('express')
const regRouter = new Router()

const regController = require('../../controller/regAuthController')

regRouter.post('/reg', regController.reg)
regRouter.post('/auth', regController.auth)
regRouter.get('/cook', regController.getCook)

module.exports = regRouter 