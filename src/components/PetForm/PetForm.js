import { useMutation, useQuery } from '@apollo/client'
import React, { useRef } from 'react'
import { getOwnersQuery } from '../../queries/queries'
import Loading from '../Loading/Loading'
import './petform.style.css'

function PetForm () {
  const { loading, error, data } = useQuery(getOwnersQuery)

  const nameInputElem = useRef(null)
  const genreInputElem = useRef(null)

  function handleOnSubmit (event) {
    useMutation()
  }

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

  return (
    <form onSubmit={ handleOnSubmit }>
      <fieldset>
        <legend>Pet</legend>
        <div className="control-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Pet name"
            ref={ nameInputElem }
          />
        </div>
        <div className="control-group">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Pet genre"
            ref={ genreInputElem }
          />
        </div>
        <div className="control-group">
          <label htmlFor="owners">Owners</label>
          <select id="owners" name="owners">
            <option defaultValue>Select owner</option>
            { data.owners.map(owner => <option key={ owner._id } value={ owner._id }>{ owner.firstName } { owner.lastName }</option>)}
          </select>
        </div>
      </fieldset>
      <button type="submit">+</button>
    </form>
  )
}

export default PetForm
