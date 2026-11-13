const User = require('../models/user')
const { AppError } = require('@utils/errorHandler')

const getUserById = async (id) => {
  const user = await User.findById(id).lean()
  if (!user) {
    throw new AppError('User not found', 404)
  }
  return user
}

/**
 * List users with pagination.
 * @param {Object} options - Pagination options.
 * @param {number} [options.page=1] - Page number.
 * @param {number} [options.limit=20] - Items per page.
 * @returns {{ items: Object[], total: number, page: number, limit: number }} An object containing users, total user count, current page, and limit.
 */
const listUsers = async ({ page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit
  const [items, total] = await Promise.all([
    User.find().skip(skip).limit(limit).lean(),
    User.countDocuments()
  ])
  return { items, total, page, limit }
}

module.exports = { getUserById, listUsers }
