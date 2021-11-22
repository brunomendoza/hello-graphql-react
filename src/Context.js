import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

function ContextProvider ({ children }) {
  const [ownerId, setOwnerId] = useState()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Context.Provider value={{ ownerId, setOwnerId, isLoading, setIsLoading }}>
      { children }
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object
}

export { ContextProvider, Context }
