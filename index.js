import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('GraphQL is great')
})

const root = { hello: () => "Hi, I'm Roman"} // resolver

app.use('/graphql', graphqlHTTP({
  schema, //same as schema:schema
  rootValue: root,
  graphiql: true, // to test
}))

app.listen(8080, () => console.log('Running on port localhost:8080/graphql'))