import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import photo from '../assets/images/img.jpg'
import styled from 'styled-components'
import { EditProduct } from './editProduct'

const listProducts = [
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
  {
    id: Math.random(),
    photo,
    name: 'product',
    describe: 'describe the product',
    price: 100500,
  },
]

export const ListProducts = ({ match }) => {
  let history = useHistory()

  const renderListProducts = (products) => {
    return products.map((product) => (
      <CardStyle key={product.id}>
        <CardImgStyle src={product.photo} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.describe}</p>
        <p>{product.price}</p>
        <button onClick={() => console.log('Del')}>Del</button>
        <button type="button" onClick={() => history.push(`${match.url}/${product.id}`)}>
          Edit
        </button>
      </CardStyle>
    ))
  }
  return (
    <Catalogue>
      {renderListProducts(listProducts)}
      <Route path={`${match.url}/:productId`} render={(props) => <EditProduct data={listProducts} {...props} />} />
      <button type="button" onClick={() => history.push('adding-product')}>
        Add Product
      </button>
    </Catalogue>
  )
}

const CardStyle = styled.div`
  border: 1px solid red;
  width: calc(33% - 40px);
  margin: 0 20px 40px;
  overflow: hidden;
`
const Catalogue = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`
const CardImgStyle = styled.img`
  height: 50px;
`
