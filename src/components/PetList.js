import React, { useState } from 'react'
import {
  useQuery
} from '@apollo/client'

import Loading from './Loading/Loading'
import { GET_PETS_QUERY } from '../queries/queries'
import PetDetails from './PetDetails/PetDetails'

function PetList () {
  const [selectedPetId, setSelectedPetId] = useState()
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
        { data.pets.map(pet => (<li key={ pet._id }><a onClick={ e => setSelectedPetId(pet._id) } href="#">{ pet.name }: { pet.genre }</a></li>))}
      </ul>
      <PetDetails petId={ selectedPetId }/>
    </div>
  )
}

export default PetList
