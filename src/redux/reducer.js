import types from './types'

const initialState = {
  loading: false,
  error: false,
  products: [],
}

export const reducer = (state = initialState, action) => {
  console.log('action: ', action)
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, loading: true }
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.products }
    case types.GET_PRODUCTS_ERROR:
      return { ...state, error: true, loading: false }

    case types.DELETE_PRODUCT:
      return { ...state, loading: true }
    case types.DELETE_PRODUCT_SUCCESS:
      const arr = state.products.filter((item) => item._id !== action.id)
      return { ...state, products: arr, loading: false }
    case types.DELETE_PRODUCT_ERROR:
      return { ...state, error: true, loading: false }

    case types.POST_PRODUCT:
      return { ...state, loading: true }
    case types.POST_PRODUCT_SUCCESS:
      return { ...state, loading: false }
    case types.POST_PRODUCT_ERROR:
      return { ...state, error: true, loading: false }
    // case types.ADD_PRODUCT:
    //   return {
    //     ...state,
    //     products: [...state.products, action.payload],
    //   }

    case types.DEL_PRODUCT:
      const newProducts = [...state.products.slice(0, action.i), ...state.products.slice(action.i + 1)]
      return {
        ...state,
        products: newProducts,
      }

    default:
      return state
  }
}
