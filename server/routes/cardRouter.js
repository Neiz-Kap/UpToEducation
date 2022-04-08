const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');

router.get('/:course_id', cardController.getOne);
router.get('/', cardController.getAll);
router.post('/', cardController.createOne);
router.put('/:course_id', cardController.editOne);
router.delete('/:course_id', cardController.deleteOne);

module.exports = router;
