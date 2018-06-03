import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is great')
})

class Friend {
  constructor(id, {firstName, lastName, gender, language, email}) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.language = language
    this.email = email
  }
}

const friendDatabase = {}


const root = {
  friend: () => {
    return {
      "id": 2254545,
      "firstName": "Roman",
      "lastName": "Brito",
      "gender": "Male",
      "language": "English",
      "email": "roman@me.com"
    }
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex')
    friendDatabase[id] = input
    return new Friend(id, input)
  }
} // resolver

app.use('/graphql', graphqlHTTP({
  schema, //same as schema:schema
  rootValue: root,
  graphiql: true, // to test
}))

app.listen(8080, () => console.log('Running on port localhost:8080/graphql'))