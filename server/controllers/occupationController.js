const { Occupation } = require('../models/models')
const ApiError = require('../error/ApiError');

class OccupationController {
  async create(req, res) {
    const { name } = req.body
    const type = await Occupation.create({ name })
    return res.json(type)
  }

  async getAll(req, res) {
    const types = await Occupation.findAll()
    return res.json(types)
  }

}

module.exports = new OccupationController()