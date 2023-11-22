const Router = require('express')
const FileRouter = new Router()
const {upload} = require('../../file-connect/file')

const fileController = require('../../controller/fileController')

FileRouter.post('/upload', upload.single('images'), fileController.uploadImg)
FileRouter.get('/img/:id', fileController.getImg)
FileRouter.get('/allimg', fileController.getAllImg)

module.exports = FileRouter 