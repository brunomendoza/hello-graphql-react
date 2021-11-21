import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { getOwnersQuery } from '../../queries/queries'
import OwnerOptionControl from '../OwnerOptionControl/OwnerOptionControl'
import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'
import { Context } from '../../Context'

function PetSelectControl ({ id, name }) {
  const { loading, error, data } = useQuery(getOwnersQuery)
  const { setOwnerId } = useContext(Context)

  function handleOnChange (event) {
    setOwnerId(ownerId => event.target.value)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>Error :(</p>
  }

  return (
    <select
      onChange={ handleOnChange }
      id={ id }
      name={ name }
    >
      <option defaultValue>Select owner</option>
      { data.owners.map(owner => <OwnerOptionControl key={ owner._id } data={ owner } />) }
    </select>
  )
}

PetSelectControl.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default PetSelectControl
