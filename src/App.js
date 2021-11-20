import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'

import PetList from './components/PetList'
import PetForm from './components/PetForm/PetForm'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ApolloProvider client={ client }>
      <div id="main">
        <h1>Pets</h1>
        <PetList />
        <PetForm />
      </div>
    </ApolloProvider>
  )
}

export default App
