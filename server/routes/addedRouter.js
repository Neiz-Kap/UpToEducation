const Router = require("express");
const router = new Router();
const addedController = require("../controllers/addedController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, addedController.getAll);

module.exports = router;
