const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

app.set('trust proxy', Number(process.env.TRUST_PROXY_HOPS) || 1)

// ------ ROUTE IMPORTS ------
const adminRoutes = require('./app/routes/admin')
const apiRoutes = require('./app/routes/api')
// ----- MIDDLEWARE IMPORTS ------
const requestLogger = require('./app/middlewares/requestLogger')
const globalRateLimiter = require('./app/middlewares/globalRateLimiter')
// ------ UTILITY IMPORTS ------
const errorHandler = require('./utils/errorHandler')
const { corsOptions } = require('./config/cors')

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))
app.use(requestLogger)
app.use(globalRateLimiter)

app.use('/api/v1', apiRoutes)
app.use('/admin', adminRoutes)

app.use(errorHandler)

module.exports = app
