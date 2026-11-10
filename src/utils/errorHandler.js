class AppError extends Error {
  constructor (message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
  }
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({ success: false, message: err.message })
}

module.exports = errorHandler
module.exports.AppError = AppError
