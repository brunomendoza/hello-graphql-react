import { useMutation } from '@apollo/client'
import React, { useContext, useRef } from 'react'
import { Context } from '../../Context'
import { ADD_PET_MUTATION } from '../../queries/queries'
import Loading from '../Loading/Loading'
import PetSelectControl from '../PetSelectControl/PetSelectControl'
import './petform.style.css'

function AddPet () {
  const [addPet, { loading, error, data }] = useMutation(ADD_PET_MUTATION)
  const { ownerId } = useContext(Context)

  const nameInputElem = useRef(null)
  const genreInputElem = useRef(null)

  function handleOnSubmit (event) {
    event.preventDefault()

    addPet({
      variables: {
        name: nameInputElem.current.value,
        genre: genreInputElem.current.value,
        ownerId: ownerId
      }
    })
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
          <PetSelectControl
            id="owners"
            name="owners"
          />
        </div>
      </fieldset>
      <button type="submit">+</button>
    </form>
  )
}

export default AddPet
