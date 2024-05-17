import React from 'react'
import Header from './components/Header'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
import { AuthProvider } from './context/AuthContext'
import ProductProvider from './context/ProductContext'
import { ThemeProvider } from './context/ThemeContext'
import ProductItem from './components/ProductItem'

const App = () => {
  return (
          <ThemeProvider>
            <ProductProvider>
              <AuthProvider>
                <Header/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/'/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/product/:productId' element={<ProductItem/>}/>
                </Routes>
              </AuthProvider>
            </ProductProvider>
          </ThemeProvider>
  )
}

export default App
// #change