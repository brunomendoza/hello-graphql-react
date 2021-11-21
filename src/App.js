import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'
import { ContextProvider } from './Context'

import PetList from './components/PetList'
import AddPet from './components/AddPet/AddPet'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ContextProvider>
      <ApolloProvider client={ client }>
        <div id="main">
          <h1>Pets</h1>
          <PetList />
          <AddPet />
        </div>
      </ApolloProvider>
    </ContextProvider>
  )
}

export default App
