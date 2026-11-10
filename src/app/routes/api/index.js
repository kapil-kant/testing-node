const express = require('express')
const userController = require('../../controllers/api/userController')

const router = express.Router()

router.get('/users', userController.listUsers)
router.get('/users/:id', userController.getUser)

module.exports = router
