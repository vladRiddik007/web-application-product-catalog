import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Path } from './routeConfig'
import { Authorization, AddingProduct, EditProduct } from '../pages'
import ListProducts from '../pages/listProducts'

export const Routes = () => (
  <Switch>
    <Route path={Path.Authorization} component={Authorization} />
    <Route path={Path.ListProducts} component={ListProducts} />
    <Route path={Path.AddingProduct} component={AddingProduct} />
    <Route path={Path.EditProduct} component={EditProduct} />
  </Switch>
)