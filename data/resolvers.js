import * as bcrypt from 'bcryptjs'
import {Aliens, Users} from './dbConnectors'

// resolver map
export const resolvers = {
  Query: {
    // getOneFriend: (root, {id}) => {
    //   return new Promise((resolve, object) => {
    //     Friends.findById(id, (err, friend) => {
    //       if (err) reject(err)
    //       else resolve(friend)
    //     })
    //   })
    // },
    getOneUser: (root, {id}) => {
      return new Promise((resolve, object) => {
        Users.findById(id, (err, user) => {
          if (err) reject(err)
          else resolve(user)
        })
      })
    },
    getAliens: () => {
      return Aliens.findAll()
    }
  },
  Mutation: {
    createUser: (root, {input}) => {
      const SALT_ROUNDS = 10
      const salt = bcrypt.genSaltSync(SALT_ROUNDS)
      const hash = bcrypt.hashSync(input.password, salt)

      const newUser = new Users({
        email: input.email,
        password: hash,
        name: input.name
      })

      newUser.id = newUser._id

      return new Promise((resolve, object) => {
       newUser.save((err) => {
         if (err) reject(err)
         else resolve(newUser)
       })
      })
    },

    // createFriend: (root, {input}) => {
    //   const newFriend = new Friends({
    //     firstName: input.firstName,
    //     lastName: input.lastName,
    //     gender: input.gender,
    //     age: input.age,
    //     language: input.language,
    //     email: input.email,
    //     contacts: input.contacts
    //   })
    //
    //   newFriend.id = newFriend._id
    //
    //   return new Promise((resolve, object) => {
    //     newFriend.save((err) => {
    //       if (err) reject(err)
    //       else resolve(newFriend)
    //     })
    //   })
    // },
    // updateFriend: (root, {input}) => {
    //   return new Promise((resolve, object) => {
    //     Friends.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, friend) => {
    //       if (err) reject(err)
    //       else resolve(friend)
    //     })
    //   })
    // },
    // deleteFriend: (root, {id}) => {
    //   return new Promise((resolve, object) => {
    //     Friends.remove({_id: id}, (err) => {
    //       if (err) reject(err)
    //       else resolve('Successfully deleted friend')
    //     })
    //   })
    // },
  },
} // resolver