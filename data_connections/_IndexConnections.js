// const router = require('express').Router();
import routerVar from 'express'
const router = routerVar.Router()
// const userRoutes = require('./userConnections/userRoutes')
import userRoutes from './userConnections/userRoutes.js'


router.use('/users', userRoutes)
export default router




