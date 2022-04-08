const {Courses} = require('../models/models');
const ApiError = require('../error/ApiError');

const uuid = require('uuid');
const path = require('path');

const fs = require('fs');

class CardController {
    async getAll(req, res){
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 12;

        let offset = limit * (page - 1);

        const courses = await Courses.findAndCountAll({limit, offset}, {raw: true});
        return res.json(courses);
    }

    async getOne(req, res, next){
		const {course_id} = req.params;
		const card = await Courses.findByPk(course_id);
		if(!card) return next(ApiError.badRequest('Курс с таким id не найден'));
		return res.json(card);
	}

    async createOne(req, res, next){
        try{
            const {author, name, description, course_url} = req.body;
            let {fone} = req.body;
            fone = fone || 192534;
            const {image} = req.files;

// 			 вот бы реализовать проверку на наличие уже имеющийся фотки
// 			 а потом её отправлять клиенту, если есть
            let fileName = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName));
			console.log()
            const card = await Courses.create({author, name, description, course_url, fone, image: fileName});
            return res.json(card);
        }
        catch(e){
            next(ApiError.badRequest(e.message));
        }
	}

	async editOne(req, res, next){
		const course = req.body;
		if(!course.course_id) return next(ApiError.badRequest('Курс с таким id не найден'));
		const updatedCourse = await Courses.findByIdAndUpdate(course.course_id, course, {new: true});
		return res.json(updatedCourse);
	}

    async deleteOne(req, res){
        try{
            const {course_id} = req.params;
            await Courses.findOne( {where: {course_id}, }).then(image => {
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

            const card = await Courses.destroy({where: {course_id}});
            return res.json(card);
        }
        catch(e){
            console.log(e);
        }
    }
}

module.exports = new CardController()
