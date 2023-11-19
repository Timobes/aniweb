const Router = require('express')
const postRouter = new Router()

const postsController = require('../../controller/postsController')

postRouter.get('/posts', postsController.getPost)
postRouter.get('/posts/:id', postsController.getOnePost)
postRouter.delete('/post/del/:id', postsController.delOnePost)
postRouter.post('/post/create', postsController.createPost)
postRouter.put('/post/update/:id', postsController.updatePost)

postRouter.get('/post/comments/:id', postsController.getComment)
postRouter.post('/post/comment/:id', postsController.sendComment)

module.exports = postRouter;