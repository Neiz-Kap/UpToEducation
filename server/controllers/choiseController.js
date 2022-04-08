const {ChoiseCourses, Courses} = require('../models/models');

class ChoiseController {

    async getAll(req, res){
        const {user_id} = req.body;
		const choisesCourses = await Courses.findAll({include: {
			model: ChoiseCourses,
			where: {choiseChoiseId: user_id}
		} });
		console.log(`choisesCourses: ${res.json(choisesCourses)}`);
		return res.json(choisesCourses);
//         const choisesCourses = await ChoiseCourses.findAll({where: {user_id: choiseChoiseId}}, {raw: true}).map(course_id => {
//             Courses.findOne({where: {course_id}});
//             const course = await Course.getById(req.body.id);
//         });

    }

    async createOne(req, res){
        const {user_id, course_id} = req.body;
        const choiseCourse = await ChoiseCourses.create({user_id: choiseChoiseId, course_id});
        return res.json(choiseCourse);
    }

    async deleteOne(req, res){ }
}

module.exports = new ChoiseController()
/*
class BasketController{

	async add(req,res){
		try{
			const{deviceId, basketId, info} = req.body
			const basketdevice = await BasketDevice.create({deviceId, basketId})

			if (info) {
				info = JSON.parse(info)
				info.forEach(i =>
				DeviceInfo.create({
					title: i.title,
					description: i.description,
					deviceId: device.id
				})
				)
			}
			return res.json(basketdevice)
		} catch(e){
			next(ApiError.badRequest(e.message))
		}
	}

	async getOne(req,res){
		const {id} = req.params
		const basketinfo = await BasketDevice.findOne(
			{
				where: {id}, //условие по которому нужно искать девайс
				include: [{model: DeviceInfo, as: 'info'}] //так же получаем массив характеристик
			},
		)
		return res.json(basketinfo)
	}

	async getAll(req,res){
		const baskets = await BasketDevice.findAll()
		return res.json(baskets)
	}

	async delete(req,res){
		const{id} = req.params
		const basket = await BasketDevice.destroy(
			{
				where:{id}
			},
		)
		return res.json("basket device deleted")
	}
}
module.exports = new BasketController()*/
