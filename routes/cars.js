const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.post('/', carsCtrl.create)
router.get('/', carsCtrl.index)
router.put('/:id', carsCtrl.update)

module.exports = router