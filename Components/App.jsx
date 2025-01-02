import React from 'react'
import Header from './Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Product from './Product'
import Error from './Error'


import Cart from './Cart'
import Contact from './Contact'
import Story from './Story'

import ProductDetails from './ProductDetails'

export default function App() {
  return (
    <>
   <BrowserRouter>
           <Header/>
           <div className='relative top-20'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Story />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contacts' element={<Contact />} />
      
          <Route path="*" element={<Error />} />

        </Routes>
      <Footer/>
           </div>
      </BrowserRouter>


  
    </>
  )
}
