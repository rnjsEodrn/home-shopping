import React from 'react'
import ProductDetailPage from '../page/ProductDetailPage'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({login, setLogin}) => {
  return (
    login?<ProductDetailPage login={login} setLogin={setLogin}/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute