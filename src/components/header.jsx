import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export const Header = () => {
  let history = useHistory()
  return (
    <header>
      <Button variant="outlined" color="primary" onClick={() => history.push('adding-product')}>
        Add Product
      </Button>
    </header>
  )
}
