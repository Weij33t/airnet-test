const { Router } = require('express')
const router = new Router()
const appController = require('../Controllers/App.controller')

router.get('/', appController.getApps)
router.post('/create', appController.create)
router.put('/edit', appController.edit)

module.exports = router
