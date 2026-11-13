const User = require('../models/user')
const { AppError } = require('@utils/errorHandler')

const getUserById = async (id) => {
  const user = await User.findById(id).lean()
  if (!user) {
    throw new AppError('User not found', 404)
  }
  return user
}

const listUsers = async ({ page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit
  const [items, total] = await Promise.all([
    User.find().skip(skip).limit(limit).lean(),
    User.countDocuments()
  ])
  return { items, total, page, limit }
}

const getUserCount = async () => {
  // Returns a number: total users, even if zero
  return await User.countDocuments()
}

module.exports = { getUserById, listUsers, getUserCount }
