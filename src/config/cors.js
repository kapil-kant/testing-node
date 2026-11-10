const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000').split(',')

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
}

module.exports = { corsOptions }
