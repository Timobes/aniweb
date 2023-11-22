const Router = require('express')
const bookRouter = new Router()

const bookController = require('../../controller/bookmarksController')

bookRouter.get('/book', bookController.getBook)
bookRouter.post('/book/:id', bookController.addBook)
bookRouter.delete('/del/book/:id', bookController.remBook)

module.exports = bookRouter;