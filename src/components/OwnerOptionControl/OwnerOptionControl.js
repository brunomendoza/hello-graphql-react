import React from 'react'
import PropTypes from 'prop-types'

function OwnerOptionControl ({ data }) {
  return (
    <option value={ data._id }>{ data.firstName } { data.lastName }</option>
  )
}

OwnerOptionControl.propTypes = {
  data: PropTypes.object
}

export default OwnerOptionControl
