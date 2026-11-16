const express = require('express')
const userController = require('../../controllers/api/userController')

const router = express.Router()

router.get('/users', userController.listUsers)
router.get('/users/:id', userController.getUser)

// Health check endpoint (no auth needed)
router.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

module.exports = router
