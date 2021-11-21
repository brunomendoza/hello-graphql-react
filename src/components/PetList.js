import React from 'react'
import {
  useQuery
} from '@apollo/client'

import Loading from './Loading/Loading'
import { GET_PETS_QUERY } from '../queries/queries'

function PetList () {
  const { loading, error, data } = useQuery(GET_PETS_QUERY)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error :(</p>
  }

  return (
    <div>
      <ul id="pet-list">
        { data.pets.map(pet => (<li key={ pet._id }>{ pet.name }: { pet.genre }</li>))}
      </ul>
    </div>
  )
}

export default PetList
