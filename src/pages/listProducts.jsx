import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as actions from '../redux/actions'

const ListProducts = ({ products, deleteProduct }) => {
  let history = useHistory()

  const renderListProducts = (prod) => {
    return prod.map((product, i) => (
      <CardStyle key={product.id}>
        <CardImgStyle src={product.photo} alt={product.name} title={product.name} />
        <p>name: {product.name}</p>
        <p>describe: {product.describe}</p>
        <p>price: {product.price}</p>
        <button onClick={() => deleteProduct(i)}>Del</button>
        <button type="button" onClick={() => history.push(`edit-product`, { id: product.id })}>
          Edit
        </button>
      </CardStyle>
    ))
  }
  return (
    <Catalogue>
      {renderListProducts(products)}
    </Catalogue>
  )
}

ListProducts.propTypes = {
  products: PropTypes.array,
  deleteProduct: PropTypes.func,
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps, actions)(ListProducts)

const CardStyle = styled.div`
  border: 1px solid red;
  width: calc(33% - 40px);
  margin: 20px;
  overflow: hidden;
`
const Catalogue = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`
const CardImgStyle = styled.img`
  height: 100px;
`
