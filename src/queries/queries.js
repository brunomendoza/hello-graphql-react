import { gql } from '@apollo/client'

const getPetsQuery = gql`
{
  pets {
    _id
    name
    genre
  }
}
`
const getOwnersQuery = gql`
{
  owners {
    _id
    firstName
    lastName
  }
}
`

const ADD_PET_MUTATION = gql`
mutation AddPet($name: String!, $genre: String!, $ownerId: ID!) {
  addPet(name: $name, genre: $genre, owner_id: $ownerId) {
    _id
  }
}
`

export {
  getPetsQuery,
  getOwnersQuery,
  ADD_PET_MUTATION
}
