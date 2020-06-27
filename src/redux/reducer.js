import * as types from './types'
import { listProducts } from '../data'

const initialState = {
  products: listProducts,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      }

    case types.DELETE_PRODUCT:
      const newProducts = [...state.products.slice(0, action.i), ...state.products.slice(action.i + 1)]
      return {
        ...state,
        products: newProducts,
      }

    default:
      return state
  }
}
