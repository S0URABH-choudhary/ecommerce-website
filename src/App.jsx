import React from 'react'
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Imageslider from './components/imageslider'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='background'>
      <Nav />

      <Imageslider />

      <div className='testimonial-wraper'>
        <h2>Happy coustomer</h2>
        <Testimonials />
      </div>
      
      <Footer />
    </div>
  
  )
}

export default App