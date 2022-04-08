const { CourseAuthor } = require('../models/models')
const ApiError = require('../error/ApiError');

class AuthorController {
  async create(req, res) {
    const { name } = req.body
    const brand = await CourseAuthor.create({ name })
    return res.json(brand)
  }

  async getAll(req, res) {
    const brands = await CourseAuthor.findAll()
    return res.json(brands)
  }

}

module.exports = new AuthorController()