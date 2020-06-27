import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { listProducts } from '../data'

export const EditProduct = (props) => {
  const history = useHistory()
  const { id } = props.location.state
  const product = listProducts.find((p) => p.id === id)
  let productData

  if (product)
    productData = (
      <CardStyle key={product.id}>
        <CardImgStyle src={product.photo} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.describe}</p>
        <p>{product.price}</p>
      </CardStyle>
    )
  else productData = <h2> Sorry. Product doesn't exist </h2>
  return (
    <div>
      <h2>Product edit pages</h2>
      <div>{productData}</div>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  )
}

const CardStyle = styled.div`
  border: 1px solid red;
  width: calc(33% - 40px);
  margin: 0 20px 40px;
  overflow: hidden;
`
const CardImgStyle = styled.img`
  height: 50px;
`