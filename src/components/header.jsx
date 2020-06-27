import React from 'react'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  let history = useHistory()
  return (
    <header>
      <button type="button" onClick={() => history.push('adding-product')}>
        Add Product
      </button>
    </header>
  )
}
