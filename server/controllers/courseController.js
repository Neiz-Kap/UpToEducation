const { Course, CourseAuthor, Occupation } = require("../models/models");
const ApiError = require("../error/ApiError");

const uuid = require("uuid");
const path = require("path");

const fs = require("fs");

class CourseController {
  async getAll(req, res) {
    try {
      let { isModerated, occupationId, authorId, page, limit } = req.query;

      page = page || 1;
      limit = limit || 12;

      let offset = limit * (page - 1);

      let courses;
      let condition = {};
      if (occupationId && !authorId) condition = { occupationId };
      if (!occupationId && authorId) condition = { authorId };
      if (occupationId && authorId) condition = { authorId, occupationId };
      if (isModerated !== undefined) condition = { ...condition, isModerated };
      courses = await Course.findAndCountAll({
        where: condition,
        limit,
        offset,
        include: [
          {
            model: CourseAuthor,
          },
          { model: Occupation },
        ],
      });

      return res.json(courses);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    // const course = await Course.findByPk(id);
    const course = await Course.findOne({
      where: { id },
      include: [
        {
          model: CourseAuthor,
        },
        { model: Occupation },
      ],
    });
    if (!course) return next(ApiError.badRequest("Курс с таким id не найден"));

    return res.json(course);
  }

  async createOne(req, res, next) {
    try {
      let {
        name,
        description,
        course_url,
        fone,
        author,
        occupation,
        isModerated,
      } = req.body;

      fone = fone || "#192534";
      isModerated = isModerated || false;
      const { image } = req.files;

      // 			 вот бы реализовать проверку на наличие уже имеющийся фотки
      // 			 а потом записать название фотки в бд, если есть таковая
      // может картинки переводить в цифровую запись и сравнивать?
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      // findOrCreate id from CourseAuthor and Occupation tables
      let courseAuthorFromDB = await CourseAuthor.findOrCreate({
        where: { name: author },
      });

      let occupationFromDB = await Occupation.findOrCreate({
        where: { name: occupation },
      });

      let courseAuthorId = courseAuthorFromDB.id;
      let occupationId = occupationFromDB.id;

      let course = await Course.create({
        author,
        name,
        description,
        course_url,
        fone,
        image: fileName,
        courseAuthorId,
        occupationId,
        isModerated,
        userId: req.user.id,
      });
      return res.json(course);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async editOne(req, res, next) {
    try {
      const { id } = req.body;
      if (!id) {
        return next(ApiError.badRequest("Вы не отправили id!"));
      }
      let course = await Course.findByPk(id);
      if (!course)
        return next(ApiError.badRequest("Курс с таким id не найден"));

      course = await Course.update(req.body, { where: { id } });
      return res.json(course);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      await Course.findOne({ where: { id } })
        .then(({ image }) => {
          if (!image) {
            fs.rm(path.resolve(__dirname, "..", "static", image), (err) => {
              if (err) {
                // return next(ApiError.internal(err.message));
                console.log(err.message);
              }
            });
          }
        })
        .catch((err) => {
          return next(ApiError.internal(`Такого курса не существует!`));
        });
      const course = await Course.destroy({ where: { id } });

      // ПРОТЕСТИРОВАТЬ ВСЁ НИЖЕ
      // delete courseAuthor and occupation

      let сoursesWithCondition = await Course.findOne({
        where: { courseAuthorId: course.courseAuthorId },
      });
      if (!сoursesWithCondition) {
        let courseAuthor = await CourseAuthor.destroy({
          where: { id: course.courseAuthorId },
        });
        console.log(`Удалён courseAuthor: ${courseAuthor}`);
      }

      сoursesWithCondition = await Course.findOne({
        where: { occupationId: course.occupationId },
      });
      if (!сoursesWithCondition) {
        let occupation = await Occupation.destroy({
          where: { id: course.occupationId },
        });
        console.log(`Удалён occupation: ${occupation}`);
      }

      return res.json(course);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CourseController();
