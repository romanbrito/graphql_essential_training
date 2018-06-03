import expess from 'express'

const app = expess()

app.get('/', (req, res) => {
  res.send('GraphQL is great')
})

app.listen(8080, () => console.log('Running on port localhost:8080/graphql'))