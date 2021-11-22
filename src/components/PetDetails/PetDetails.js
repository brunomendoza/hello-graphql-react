import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PET_QUERY } from '../../queries/queries'
import PropTypes from 'prop-types'
import PetTable from '../PetTable/PetTable'
import Loading from '../Loading/Loading'

function PetDetails ({ petId }) {
  const [someId, setSomeId] = useState()
  const [anotherId, setAnotherId] = useState()
  const petIdExists = petId !== null && petId !== undefined
  const { data, loading, error } = useQuery(GET_PET_QUERY, { variables: { petId }, skip: !petIdExists })

  function getSomeId () {
    setTimeout(() => setSomeId(1), 1500)
  }

  function getAnotherId () {
    setTimeout(() => setAnotherId(2), 2000)
  }

  useEffect(() => {
    if (someId) {
      console.log(someId)
      getAnotherId()
    }
  }, [someId])

  useEffect(() => {
    if (anotherId) {
      console.log(anotherId)
    }
  }, [anotherId])

  if (petIdExists) {
    return (
      <div id="inner-wrapper">
        <button onClick={ getSomeId }>Fuck you!</button>
        <h2>Pet Details</h2>
        { loading ? <Loading /> : error ? <p>{ error } </p> : <PetTable pet={ data.pet } /> }
      </div>
    )
  } else {
    return (<p>No pet selected</p>)
  }
}

PetDetails.propTypes = {
  petId: PropTypes.string
}

export default PetDetails
