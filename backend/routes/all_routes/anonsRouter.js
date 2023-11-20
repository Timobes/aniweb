const Router = require('express')
const anonsRouter = new Router()

const anonsController = require('../../controller/anonsController')

anonsRouter.get('/anons', anonsController.getAnons)
anonsRouter.get('/anons/:id', anonsController.getOneAnons)
anonsRouter.post('/anons/create', anonsController.createAnons)


module.exports = anonsRouter;