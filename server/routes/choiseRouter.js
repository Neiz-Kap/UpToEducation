const Router = require("express");
const router = new Router();
const choiseController = require("../controllers/choiseController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, choiseController.getAll);
router.post("/", authMiddleware, choiseController.createOne);
router.delete("/", authMiddleware, choiseController.deleteOne);

module.exports = router;
