const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    loginToUser,
    changeAUsereMailOrPassword,
} = require('./UserController');

router
    .route('/')
    .post(getAllUsers)
    .post(createUser)

router
    .route('/login')
    .get(loginToUser);

router
    .route('/change_user_credentials')
    .put(changeAUsereMailOrPassword)

module.exports = router;
