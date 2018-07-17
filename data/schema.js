import {resolvers} from './resolvers'
import {makeExecutableSchema} from 'graphql-tools'
const typeDefs = `
type User {
  id: ID
  email: String
  password: String
  name: String
}

type Friend {
  id: ID
  firstName: String
  lastName: String
  gender: Gender
  age: Int
  language: String
  email: String
  contacts: [Contact]
}

type Alien {
  id: ID,
  firstName: String
  lastName: String
  planet: String
}

type Contact {
  firstName: String
  lastName: String  
}

enum Gender {
  MALE
  FEMALE
  OTHER
}

type Email {
  email: String
}

type Query {
  getOneFriend(id: ID): Friend
  getOneUser(id: ID): User
  getAliens: [Alien]
}

input FriendInput {
  id: ID
  firstName: String!
  lastName: String
  gender: Gender
  age: Int
  language: String
  email: String
  contacts: [ContactInput]
}

input ContactInput {
  firstName: String
  lastName: String
}

input UserInput {
  id: String
  email: String
  password: String
  name: String
}

input AuthenticateInput {
  email: String!
  password: String
  }
  
  type AuthenticateUserPayload {
    id: ID!
    name: String
  }

type Mutation {
  createFriend(input: FriendInput): Friend
  updateFriend(input: FriendInput): Friend
  deleteFriend(id: ID!): String
  createUser(input: UserInput): User
  updateUser(input: UserInput): User
  authenticateUser(input: AuthenticateInput!): AuthenticateUserPayload 
}
`

const schema = makeExecutableSchema({typeDefs, resolvers})

export { schema }