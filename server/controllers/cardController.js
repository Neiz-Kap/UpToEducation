const { Course, CourseAuthor, Occupation } = require('../models/models');
const ApiError = require('../error/ApiError');

const uuid = require('uuid');
const path = require('path');

const fs = require('fs');

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

class CardController {
  async getAll(req, res) {
    let { occupationId, authorId, page, limit } = req.query;
    page = page || 1;
    limit = limit || 12;

    let offset = limit * (page - 1);

    let courses;
    if (!occupationId && !authorId) {
      courses = await Course.findAndCountAll({ limit, offset }, { raw: true })
    }
    if (occupationId && !authorId) {
      courses = await Course.findAndCountAll({ where: { occupationId }, limit, offset })
    }
    if (!occupationId && authorId) {
      courses = await Course.findAndCountAll({ where: { authorId }, limit, offset })
    }
    if (occupationId && authorId) {
      courses = await Course.findAndCountAll({ where: { authorId, occupationId }, limit, offset })
    }
    return res.json(courses);
  }

  async getOne(req, res, next) {
    const { course_id } = req.params;
    const card = await Course.findByPk(course_id);
    if (!card) return next(ApiError.badRequest('Курс с таким id не найден'));
    return res.json(card);
  }

  async createOne(req, res, next) {
    try {
      const { author, name, description, course_url, occupation } = req.body;
      let { fone } = req.body;
      fone = fone || 192534;
      const { image } = req.files;

      // 			 вот бы реализовать проверку на наличие уже имеющийся фотки
      // 			 а потом её отправлять клиенту, если есть
      let fileName = uuid.v4() + ".jpg";
      image.mv(path.resolve(__dirname, '..', 'static', fileName));
      console.log()
      //occupationId
      let courseAuthor = await CourseAuthor.findOne({ where: { name: author } })
      if (!courseAuthor) {
        courseAuthor = await CourseAuthor.create({ name: author })
      }
      let courseAuthorId = courseAuthor.id
      console.log(`courseAuthorId`, courseAuthorId)

      let occupationFromDB = await Occupation.findOne({ where: { name: occupation } })
      if (!occupationFromDB) {
        occupationFromDB = await Occupation.create({ name: occupation })
      }

      // может с author точно также сделать?

      let occupationId = occupationFromDB.id;
      console.log(`occupationId`, occupationId)
      const card = await Course.create({ author, name, description, course_url, fone, image: fileName, courseAuthorId, occupationId });
      return res.json(card);
    }
    catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async editOne(req, res, next) {
    const course = req.body;
    if (!course.course_id) return next(ApiError.badRequest('Курс с таким id не найден'));
    const updatedCourse = await Course.findByIdAndUpdate(course.course_id, course, { new: true });
    return res.json(updatedCourse);
  }

  async deleteOne(req, res) {
    try {
      const { course_id } = req.params;
      await Course.findOne({ where: { course_id }, }).then(image => {
        const filePath = image.image;
        console.log(filePath);
        //                 https://arjunphp.com/how-to-delete-a-file-in-node-js/
        fs.access(filePath, err => {
          if (!err) {
            fs.unlink(filePath, err =>
              console.log(err));
          } else {
            console.log(err);
          }
        });
      });

      const card = await Course.destroy({ where: { course_id } });
      return res.json(card);
    }
    catch (e) {
      console.log(e);
    }
  }

  // async deleteOne(req, res) {
  //   const { id } = req.params
  //   let post = await Device.findOne({ where: { id }, },)
  //   await Device.destroy({ where: { id }, },)
  //   console.log(`Удалён post: ${post}`)

  //   const brandIdAtDevice = post.brandId;
  //   console.log(`post.brandId: ${post.brandId}`)
  //   let otherPost = await Device.findOne({ where: { brandId: brandIdAtDevice } })
  //   if (!otherPost) {
  //     var brand = await Brand.findOne({ id: brandIdAtDevice })
  //     await Brand.destroy({ where: { id: brandIdAtDevice } })
  //     console.log(`Удалён brand: ${brand}`)
  //   }

  //   return res.json(post)
  // }

}

module.exports = new CardController()
