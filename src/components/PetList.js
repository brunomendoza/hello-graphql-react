import React from 'react'
import {
  gql,
  useQuery
} from '@apollo/client'

import Loading from './Loading/Loading'

const getPetsQuery = gql`
  {
    pets {
      _id
      name
      genre
    }
  }
`

function PetList () {
  const { loading, error, data } = useQuery(getPetsQuery)

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  console.log(data.pets)
  return (
    <div>
      <ul id="pet-list">
        { data.pets.map(pet => (<li key={ pet._id }>{ pet.name }: { pet.genre }</li>))}
      </ul>
    </div>
  )
}

export default PetList
