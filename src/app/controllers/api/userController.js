const userService = require('@services/userService')

const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)
    res.json({ success: true, data: user })
  } catch (error) {
    next(error)
  }
}

const listUsers = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 20
    const result = await userService.listUsers({ page, limit })
    res.json({ success: true, data: result })
  } catch (error) {
    next(error)
  }
}

const getUserCount = async (req, res, next) => {
  try {
    const count = await userService.getUserCount()
    res.json({ success: true, data: count })
  } catch (error) {
    next(error)
  }
}

module.exports = { getUser, listUsers, getUserCount }
