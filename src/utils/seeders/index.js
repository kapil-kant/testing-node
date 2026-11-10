const mongoose = require('mongoose')
const User = require('../../models/user')

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  await User.updateOne({ email: 'admin@example.com' }, { name: 'Admin', role: 'admin' }, { upsert: true })
  await mongoose.disconnect()
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
