const { Course, CourseAuthor, Occupation } = require("../models/models");

const ApiError = require("../error/ApiError");

class AddedController {
  async getAll(req, res) {
    try {
      let addedCourses = {};
      addedCourses.moderated = await Course.findAll({
        where: { userId: req.user.id, isModerated: true },
        include: [
          {
            model: CourseAuthor,
          },
          { model: Occupation },
        ],
      });
      addedCourses.unmoderated = await Course.findAll({
        where: { userId: req.user.id, isModerated: false },
        include: [
          {
            model: CourseAuthor,
          },
          { model: Occupation },
        ],
      });

      return res.json(addedCourses);
    } catch (e) {
      console.log(`error: ${e.message}`);
    }
  }
}

module.exports = new AddedController();
