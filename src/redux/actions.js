import types from './types'

//delete
export const deleteProduct = (i) => ({ type: types.DEL_PRODUCT, i })
// export const deleteProduct = (id) => async (dispatch) => {
//   dispatch(deleteProductStarted())
//   try {
//     const response = await fetch(`https://app-products-catalog.firebaseio.com/product.json`, {
//       method: 'DELETE',
//     })
//     if (response.status) {
//       dispatch(deleteProductSuccess(response.data._id))
//     }
//   } catch (error) {
//     dispatch(deleteProductError())
//     console.log(error.message)
//   }
// }

export const deleteProductStarted = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  }
}
export const deleteProductSuccess = (id) => {
  return {
    type: types.DELETE_PRODUCT_SUCCESS,
    id,
  }
}

export const deleteProductError = () => {
  return {
    type: types.DELETE_PRODUCT_ERROR,
  }
}

//add
// export const addProduct = (payload) => ({ type: types.ADD_PRODUCT, payload })

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsStarted())
  try {
    const products = await fetch('https://app-products-catalog.firebaseio.com/product.json')
    const data = await products.json()
    if (products) {
      dispatch(getProductsSuccess(Object.values(data)))
    }
  } catch (error) {
    dispatch(getProductsError())
    console.log(error.message)
  }
}

export const getProductsStarted = () => {
  return {
    type: types.GET_PRODUCTS,
  }
}

export const getProductsSuccess = (products) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products,
  }
}

export const getProductsError = () => {
  return {
    type: types.GET_PRODUCTS_ERROR,
  }
}

export const postProduct = (newProduct) => async (dispatch) => {
  dispatch(postProductStarted())
  const formData = new FormData()

  for (const key in newProduct) {
    formData.append(key, newProduct[key])
  }
  try {
    console.log('formData: ', formData)
    console.log('newProduct: ', newProduct)
    const response = await fetch('https://app-products-catalog.firebaseio.com/product.json', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response) {
      dispatch(postProductSuccess(response.data))
    }
  } catch (error) {
    dispatch(postProductError())
    console.log(error.message)
  }
}

export const postProductStarted = (product) => {
  return {
    type: types.POST_PRODUCT,
    product,
  }
}
export const postProductSuccess = (newProduct) => {
  return {
    type: types.POST_PRODUCT_SUCCESS,
    newProduct,
  }
}

export const postProductError = () => {
  return {
    type: types.POST_PRODUCT_ERROR,
  }
}
