require('module-alias/register')
require('dotenv').config()

const mongoose = require('mongoose')
const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')

const server = http.createServer(app)
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/prep')
  .then(() => {
    server.listen(PORT, () => logger.info('server started', { port: PORT }))
  })
  .catch((error) => {
    logger.error('mongo connection failed', { message: error.message })
    process.exit(1)
  })
