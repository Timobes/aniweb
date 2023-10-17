const Router = require('express')
const animeRouter = new Router()

const animeController = require('../../controller/animeController')
const tagsController = require('../../controller/tagsController')

animeRouter.post('/create', animeController.createAnime, tagsController.createTag)
animeRouter.get('/anime', animeController.getAnime)
animeRouter.get('/anime/:id', animeController.getOneAnime)
animeRouter.delete('/del/anime/:id', animeController.deleteAnime)
animeRouter.put('/anime/up', animeController.updateAnime)

animeRouter.get('/anime/rev/:id', animeController.getRev)
animeRouter.post('/anime/rev/:id', animeController.sendRev)
animeRouter.delete('/del/rev/:id', animeController.delRev)

module.exports = animeRouter 