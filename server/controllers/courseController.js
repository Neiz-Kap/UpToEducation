const { Course, CourseAuthor, Occupation } = require("../models/models");
const ApiError = require("../error/ApiError");

const uuid = require("uuid");
const path = require("path");

const fs = require("fs");

// const createCourseAuthor = (author) => {
//   let courseAuthor = await CourseAuthor.findOne({ where: { name: author } })
//   if (!course_author) {
//     courseAuthor = await CourseAuthor.create({ name: author })
//   }

//   return courseAuthor.id;
// }

// const createOccupation = (occupation) => {
//   let occupationFromDB = await Occupation.findOne({ where: { name: occupation } })
//   if (!occupationFromDB) {
//     occupationFromDB = await Occupation.create({ name: occupation })
//   }

//   return occupationFromDB.id;
// }

class CourseController {
  async getAll(req, res) {
    let { occupationId, authorId, page, limit } = req.query;
    page = page || 1;
    limit = limit || 12;

    let offset = limit * (page - 1);

    let courses;
    if (!occupationId && !authorId) {
      courses = await Course.findAndCountAll({ limit, offset }, { raw: true });
    }
    if (occupationId && !authorId) {
      courses = await Course.findAndCountAll({
        where: { occupationId },
        limit,
        offset,
      });
    }
    if (!occupationId && authorId) {
      courses = await Course.findAndCountAll({
        where: { authorId },
        limit,
        offset,
      });
    }
    if (occupationId && authorId) {
      courses = await Course.findAndCountAll({
        where: { authorId, occupationId },
        limit,
        offset,
      });
    }

    for (let course of courses) {
      course.author = await CourseAuthor.findOne({ where: { authorId } }); //
      course.occupation = await Occupation.findOne({ where: { occupationId } }); //
    }

    return res.json(courses);
  }

  async getOne(req, res, next) {
    const { course_id } = req.params;
    const course = await Course.findByPk(course_id);
    if (!course) return next(ApiError.badRequest("Курс с таким id не найден"));

    // надо найти id автора и профессии и припихнуть к course author и occupation
    return res.json(course);
  }

  async createOne(req, res, next) {
    try {
      const { name, description, course_url, fone, author, occupation } =
        req.body;
      fone = fone || "#192534";
      const { image } = req.files;

      // 			 вот бы реализовать проверку на наличие уже имеющийся фотки
      // 			 а потом записать название фотки в бд, если есть таковая
      // может картинки переводить в цифровую запись и сравнивать?
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, "..", "static", fileName));

      let courseAuthorFromDB = await CourseAuthor.findOne({
        where: { name: author },
      });
      if (!courseAuthorFromDB) {
        // создаём нового автора, если не нашли его в бд
        courseAuthorFromDB = await CourseAuthor.create({ name: author });
      }

      let occupationFromDB = await Occupation.findOne({
        where: { name: occupation },
      });
      if (!occupationFromDB) {
        // создаём новую профессию, если не нашли её в бд
        occupationFromDB = await Occupation.create({ name: occupation });
      }

      let courseAuthorId = courseAuthorFromDB.id;
      let occupationId = occupationFromDB.id;
      console.log(`courseAuthorId`, courseAuthorId);
      console.log(`occupationId`, occupationId);

      const course = await Course.create({
        author,
        name,
        description,
        course_url,
        fone,
        image: fileName,
        courseAuthorId,
        occupationId,
      });
      return res.json(course);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async editOne(req, res, next) {
    const course = req.body;
    if (!course.course_id)
      // а точно course_id ?!
      return next(ApiError.badRequest("Курс с таким id не найден"));
    const updatedCourse = await Course.findByIdAndUpdate(
      course.course_id,
      course,
      { new: true }
    );
    return res.json(updatedCourse);
  }

  async deleteOne(req, res) {
    try {
      const { course_id } = req.params;
      await Course.findOne({ where: { course_id } }).then((image) => {
        const filePath = image.image;
        console.log(filePath);
        //                 https://arjunphp.com/how-to-delete-a-file-in-node-js/
        fs.access(filePath, (err) => {
          if (!err) {
            fs.unlink(filePath, (err) => console.log(err));
          } else {
            console.log(err);
          }
        });
      });

      const course = await Course.destroy({ where: { course_id } });

      // delete courseAuthor and occupation
      const courseAuthorKey = course.courseAuthorId;
      const occupationKey = course.occupationId;

      let otherCoursesWith = await Course.findOne({
        where: { courseAuthorId: courseAuthorKey },
      });
      if (!otherCourses) {
        let courseAuthor = await CourseAuthor.destroy({
          where: { id: courseAuthorKey },
        });
        console.log(`Удалён courseAuthor: ${courseAuthor}`);
      }

      otherCoursesWith = await Course.findOne({
        where: { occupationId: occupationKey },
      });
      if (!otherCourses) {
        let occupation = await Occupation.destroy({
          where: { id: occupationKey },
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
