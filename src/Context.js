import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

function ContextProvider ({ children }) {
  const [ownerId, setOwnerId] = useState()

  return (
    <Context.Provider value={{ ownerId, setOwnerId }}>
      { children }
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object
}

export { ContextProvider, Context }
