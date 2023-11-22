const Router = require('express')
const userRouter = new Router()

const userController = require('../../controller/userController')

userRouter.get('/users', userController.getUser)
userRouter.get('/user/:id', userController.getOneUser)
userRouter.delete('/user/del/:id', userController.deleteUser)
userRouter.put('/user/up/:id', userController.updateUser)

module.exports = userRouter 