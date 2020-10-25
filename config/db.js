require('dotenv').config()
const mongoose = require('mongoose')
const local = 'mongodb://localhost:27017/party-manage'
const db = process.env.MONGO_URI || local

const Connect_DB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('Connected to MongoDB successfuly...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = Connect_DB