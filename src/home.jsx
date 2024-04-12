import React from 'react'
import Imageslider from './components/imageslider'
import Testimonials from './components/Testimonials'

import './home.css'

function home() {
  return (
    <div className='background'>

      <Imageslider />

      <div className='testimonial-wraper'>
        <h2>Happy coustomer</h2>
        <Testimonials />
        </div>
    
      </div>
  )
}

export default home