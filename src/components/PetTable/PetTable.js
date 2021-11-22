import React from 'react'
import PropTypes from 'prop-types'

function PetTable ({ pet }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <td>{ pet.name }</td>
        </tr>
        <tr>
          <th>genre</th>
          <td>{ pet.genre }</td>
        </tr>
        <tr>
          <th>owner</th>
          <td>{ pet.owner.firstName }</td>
        </tr>
      </tbody>
    </table>
  )
}

PetTable.propTypes = {
  pet: PropTypes.object
}

export default PetTable
