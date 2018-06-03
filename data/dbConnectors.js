import mongoose from 'mongoose'

// Mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/friends', {
  useMongoClient: true
})

const friendsSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
})

const Friends = mongoose.model('friends', friendsSchema)

export {Friends}