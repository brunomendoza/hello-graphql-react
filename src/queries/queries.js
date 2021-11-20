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

export { getPetsQuery, getOwnersQuery }
