const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.post('/', carsCtrl.create)
router.get('/', carsCtrl.index)

module.exports = router