import routerVar from 'express'
const router = routerVar.Router()

import userController from './UserController.js'


router
    .route('/')
    .post(userController.getAllUsers)
    .post(userController.createUser)

router
    .route('/login')
    .get(userController.loginToUser);

router
    .route('/change_user_credentials')
    .put(userController.changeAUsereMailOrPassword)

export default router