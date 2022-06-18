const Router = require("express");
const router = new Router();
const courseController = require("../controllers/courseController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:id", courseController.getOne);
router.get("/", courseController.getAll);
router.post("/", authMiddleware, courseController.createOne);
router.put("/", authMiddleware, courseController.editOne);
router.delete("/:id", authMiddleware, courseController.deleteOne);

module.exports = router;
