import express from 'express'
import Controllers from '../controllers/index.js'
import config from '../config.js'
const router = express.Router()

router.get('/api', Controllers.getAllDirs)
router.get('/api/:directory', Controllers.getDetailDir)

router.get('/', (req, res) => {
  res.render('MainView', {
    baseIp: config.base
  })
})
router.get('/:directory', (req, res) => {
  res.render('DetailView', {
    paramsView: req.params.directory,
    baseIp: config.base
  })
})

export default router
