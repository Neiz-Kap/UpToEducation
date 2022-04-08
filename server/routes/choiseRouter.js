const Router = require('express');
const router = new Router();
const choiseController = require('../controllers/choiseController')

router.get('/', choiseController.getAll);
router.post('/', choiseController.createOne);
router.delete('/', choiseController.deleteOne);

module.exports = router;
