const Router = require('express')
const router = new Router()
const occupationController = require('../controllers/occupationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), occupationController.create)
router.get('/', occupationController.getAll)

module.exports = router
