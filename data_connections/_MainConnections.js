// const router = require('express').Router();
// const apiRoutes = require('./_IndexConnections.js');
// const htmlRoutes = require('./html_routes/HtmlRoutes.js');

import routerVar from 'express'
const router = routerVar.Router()
import apiRoutes from './_IndexConnections.js'
import htmlRoutes from './html_routes/HtmlRoutes.js'

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

export default router;

