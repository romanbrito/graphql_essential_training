import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'

// Mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/users',
//   {
//   useMongoClient: true
// }
)

// const friendsSchema = new mongoose.Schema({
//   firstName: {
//     type: String
//   },
//   lastName: {
//     type: String
//   },
//   gender: {
//     type: String
//   },
//   age: {
//     type: Number
//   },
//   language: {
//     type: String
//   },
//   email: {
//     type: String
//   },
//   contacts: {
//     type: Array
//   }
// })
//
// const Friends = mongoose.model('friends', friendsSchema)

const usersSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  name: {
    type: String
  }
})

const Users = mongoose.model('users', usersSchema)


// SQL
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './aliens.sqlite',
})

const Aliens = sequelize.define('aliens', {
  firstName: {type: Sequelize.STRING},
  lastName: {type: Sequelize.STRING},
  planet: {type: Sequelize.STRING},
})

Aliens.sync({force: true}).then(() => { // creating fake data
  _.times(10, (i) => {
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word
    })
  })
})

export {Aliens, Users}