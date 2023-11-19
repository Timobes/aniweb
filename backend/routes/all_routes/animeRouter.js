const Router = require('express')
const animeRouter = new Router()

const animeController = require('../../controller/animeController')

animeRouter.post('/create', animeController.createAnime)
animeRouter.get('/anime', animeController.getAnime)
animeRouter.get('/anime/:id', animeController.getOneAnime)
animeRouter.delete('/del/anime/:id', animeController.deleteAnime)
animeRouter.put('/anime/up', animeController.updateAnime)

animeRouter.get('/anime/rev/:id', animeController.getRev)
animeRouter.post('/anime/rev/:id', animeController.sendRev)

module.exports = animeRouter 