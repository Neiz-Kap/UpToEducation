const {
  ChoiseCourse,
  Course,
  CourseAuthor,
  Occupation,
} = require("../models/models");

const ApiError = require("../error/ApiError");

class ChoiseController {
  async getAll(req, res) {
    try {
      let choisesCourses = await ChoiseCourse.findAll({
        attributes: [],
        where: { userId: req.user.id },
        // include: Course,
        include: [
          {
            model: Course,
            as: "course",
            where: { isModerated: true },
            required: true,
            include: [
              {
                model: CourseAuthor,
              },
              { model: Occupation },
            ],
          },
        ],
      });
      choisesCourses = choisesCourses.map((course) => course.course);
      return res.json(choisesCourses);
    } catch (e) {
      console.log(`error: ${e.message}`);
    }
  }

  async createOne(req, res, next) {
    try {
      const { courseId } = req.body;

      const findCourse = await Course.findOne({ where: { id: courseId } });
      if (!findCourse) {
        return next(ApiError.badRequest("Курса, с текущим id, не существует!"));
      }
      if (!findCourse.isModerated) {
        return next(
          ApiError.forbidden(
            "Этот курс находится на модерации. Вы не можете добавить его в Избранное!"
          )
        );
      }

      let choiseCourse = await ChoiseCourse.findOne({
        userId: req.user.id,
        courseId,
      });
      if (choiseCourse) {
        return next(
          ApiError.internal("Такой курс уже есть у вас на странице Избранное!")
        );
      }
      choiseCourse = await ChoiseCourse.create({
        userId: req.user.id,
        courseId,
      });
      return res.json(choiseCourse);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }

  async deleteOne(req, res, next) {
    const { courseId } = req.body;

    const choiseCourse = await ChoiseCourse.findOne({
      where: {
        userId: req.user.id,
        courseId,
      },
    });
    if (!choiseCourse) {
      return next(
        ApiError.badRequest(
          "На этом аккаунте нет такого избранного курса с этим id!"
        )
      );
    }

    const deleteChoiseCourse = await ChoiseCourse.destroy({
      where: {
        userId: req.user.id,
        courseId,
      },
    });

    return res.json(deleteChoiseCourse);
  }
}

module.exports = new ChoiseController();
