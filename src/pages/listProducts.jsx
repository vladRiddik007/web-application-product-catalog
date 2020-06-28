import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import { getProducts, deleteProduct } from '../redux/actions'
import { CardStyle } from '../components/card'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
}))

const ListProducts = ({ products, getProducts, deleteProduct }) => {
  const classes = useStyles()
  let history = useHistory()
  useEffect(() => {
    getProducts()
  }, [getProducts])

  const renderListProducts = (prod) => {
    return prod.map((product, i) => (
      <Card className={classes.root} key={product.id}>
        <CardStyle product={product} />
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => deleteProduct(i)}
          >
            Delete
          </Button>
          <Button variant="outlined" color="primary" onClick={() => history.push(`edit-product`, { id: product.id })}>
            Edit
          </Button>
        </CardActions>
      </Card>
    ))
  }
  return <Catalogue>{renderListProducts(products)}</Catalogue>
}

ListProducts.propTypes = {
  products: PropTypes.array,
  deleteProduct: PropTypes.func,
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = {
  getProducts,
  deleteProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)

const Catalogue = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`
