import React from 'react'
import { useHistory } from 'react-router-dom'

export const AddingProduct = () => {
  let history = useHistory()
  return (
    <div>
      <h2>Pages for adding a new product</h2>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  )
}
