import React from 'react'
import Home from './home'
import Contact from './contact'
import About from './aboutus'
import Product from './products'
import Nav from './components/nav'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

const App = ( ) => {
  return(
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
      <Route path='/aboutus' element = {<About />}></Route>
      <Route path='/product' element= {<Product />}></Route>
    </Routes>
    
    <Footer />
    </BrowserRouter>
  )

}

export default App