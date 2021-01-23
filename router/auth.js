const router = require('express').Router()
const authController = require('../controller/auth_controller')
router.post('/v1/send_code', authController.user_register)
router.post('/v1/verify', authController.user_verify)
router.post('/v1/getUserPlan', authController.getUserPlan)
module.exports = router