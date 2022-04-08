const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const choiseRouter = require('./choiseRouter');
const cardRouter = require('./cardRouter');

router.use('/user', userRouter);
router.use('/choise', choiseRouter);
router.use('/cards', cardRouter);

module.exports = router;
