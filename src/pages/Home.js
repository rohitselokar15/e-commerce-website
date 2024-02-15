import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router';
import ProductList from '../components/ProductList'

const Home = () => {

  const {authenticated} = useContext(AuthContext);

  if(!authenticated){
    return <Navigate to="/login"/>;
  }

  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default Home
