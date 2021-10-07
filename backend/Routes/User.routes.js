const { Router } = require('express')
const router = new Router()
const tableController = require('../Controllers/user.controller')

router.post('/auth', tableController.auth)

module.exports = router
