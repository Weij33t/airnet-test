const { Router } = require('express')
const router = new Router()
const tableController = require('../Controllers/User.controller')

router.post('/auth', tableController.auth)

module.exports = router
