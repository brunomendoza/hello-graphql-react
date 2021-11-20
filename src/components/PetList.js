import React from 'react'
import {
  useQuery
} from '@apollo/client'

import Loading from './Loading/Loading'
import { getPetsQuery } from '../queries/queries'

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
