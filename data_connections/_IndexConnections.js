const router = require('express').Router();
const userRoutes = require('./userConnections/userRoutes')

router.use('/users', userRoutes)

module.exports = router;
