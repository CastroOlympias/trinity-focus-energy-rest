// const router = require('express').Router();
import routerVar from 'express'
const router = routerVar.Router()

// const path = require('path');
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// router.get('/add-pizza', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/add-pizza.html'));
// });

// router.get('/pizza', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/pizza.html'));
// });



export default router



