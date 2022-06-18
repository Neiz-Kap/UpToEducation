const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const choiseRouter = require("./choiseRouter");
const courseRouter = require("./courseRouter");
const occupationRouter = require("./occupationRouter");
const authorRouter = require("./authorRouter");

router.use("/user", userRouter);
router.use("/choiseCourse", choiseRouter);
router.use("/course", courseRouter);
router.use("/occupation", occupationRouter);
router.use("/author", authorRouter);

module.exports = router;
