import { gql } from '@apollo/client'

const GET_PETS_QUERY = gql`
{
  pets {
    _id
    name
    genre
  }
}
`
const GET_OWNERS_QUERY = gql`
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
  GET_PETS_QUERY,
  GET_OWNERS_QUERY,
  ADD_PET_MUTATION
}
