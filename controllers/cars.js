const { Car, Tire } = require("../models")


const create = async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cars = await Car.findAll({
      include: [{ model: Tire, as: "tires" }],
  })
    res.status(200).json(cars)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {

    // const car = await Car.update(
    //   req.body,
    //   { where: { id: req.params.id }, returning: true }
    // )
    const car = await Car.findByPk(req.params.id)
    car.set(req.body)
    await car.save()
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCar = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record!
    const numberOfRowsRemoved = await Car.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(numberOfRowsRemoved) // Expected: 1
  } catch (error) {
    res.status(500).json(error)
  }
}

const addTire = async (req, res) => {
  try {
    // Append a catId to req.body:
    req.body.carId = req.params.id
    const tire = await Tire.create(req.body)
    res.status(200).json(tire)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteCar,
  addTire
}