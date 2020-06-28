import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Path } from './routeConfig'
import { Authorization,  } from '../pages'
import ListProducts from '../pages/listProducts'
import AddingProduct from '../pages/addingProduct'
import EditProduct from '../pages/editProduct'

export const Routes = () => (
  <Switch>
    <Route path={Path.Authorization} component={Authorization} />
    <Route path={Path.ListProducts} component={ListProducts} />
    <Route path={Path.AddingProduct} component={AddingProduct} />
    <Route path={Path.EditProduct} component={EditProduct} />
  </Switch>
)
