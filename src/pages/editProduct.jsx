import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { CardStyle } from '../components/card'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
}))

export const EditProduct = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { id } = props.location.state
  const product = props.products.find((p) => p.id === id)
  let productData

  if (product)
    productData = (
      <Card className={classes.root} key={product.id}>
        <CardStyle product={product} />
      </Card>
    )
  else productData = <h2> Sorry. Product doesn't exist </h2>
  return (
    <div>
      <div>{productData}</div>
      <Button variant="outlined" color="primary" onClick={() => history.goBack()}>
        Go back
      </Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps, null)(EditProduct)
