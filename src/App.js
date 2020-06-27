import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Routes } from './routes'
import styled from 'styled-components'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <UlStyled>
            <li>
              <NavLink to="/authorization" activeClassName="">
                Authorization
              </NavLink>
            </li>
            <li>
              <NavLink to="/list-products" activeClassName="">
                ListProducts
              </NavLink>
            </li>
          </UlStyled>
        </nav>
        <Routes />
      </div>
    </Router>
  )
}

export default App

const UlStyled = styled.ul`
  list-style: none;
`
