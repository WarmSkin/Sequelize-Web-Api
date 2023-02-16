const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.post('/', carsCtrl.create)
router.get('/', carsCtrl.index)
router.put('/:id', carsCtrl.update)
router.delete('/:id', carsCtrl.delete)
router.post('/:id/tires', carsCtrl.addTire)

module.exports = router