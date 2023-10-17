const Router = require('express')
const tagsRouter = new Router()

const tagsController = require('../../controller/tagsController')

tagsRouter.get('/tags', tagsController.getTags)
tagsRouter.get('/tag/:id', tagsController.getOneTag)
tagsRouter.post('/tag/create', tagsController.createTag)

// tagsRouter.post('/tag/del', tagsController.createTag)

tagsRouter.put('/tags/up/:id', tagsController.renameTag)
tagsRouter.get('/anitags/:id', tagsController.tagsAnime)
tagsRouter.post('/anitags/create/:id', tagsController.createTagsAnime)


module.exports = tagsRouter;