const { Car } = require("../models")


const create = async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}