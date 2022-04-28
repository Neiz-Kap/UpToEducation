const Router = require("express");
const router = new Router();
const courseController = require("../controllers/courseController");

router.get("/:course_id", courseController.getOne);
router.get("/", courseController.getAll);
router.post("/", courseController.createOne);
router.put("/:course_id", courseController.editOne);
router.delete("/:course_id", courseController.deleteOne);

module.exports = router;
