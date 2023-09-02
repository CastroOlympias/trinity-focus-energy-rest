const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    loginToUser,
} = require('./UserController.js');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/login')
    .get(loginToUser);

module.exports = router;
