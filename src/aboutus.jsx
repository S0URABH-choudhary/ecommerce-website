import React from 'react'
import Imageforabout from './assets/bgc.png'
import Feather from './assets/feather.png'
import './aboutus.css'


function aboutus() {
  return (
    <div className='about-krishna-store'>
      <div className="about-krishna-store-image-div">
        <div className="about-krishna-store-image">
          <img src={Imageforabout} alt="img" />
        </div>
      </div>
      <div className="about-krishna-store-content-div">
        <div className="about-krishna-store-content"><h1>Krishna Stote <span className="peecock-feather"><img src={Feather} alt="img" /></span></h1>
        <h5>Jay shree krishna ! The Krishna Store is your one-stop destination for all things related to Krishn consciousness. Explore our wide range of products, including traditional clothing, spiritual books, deity accessories, incense, and much more. Immerse yourself in the beauty of devotional items that nourish the soul and elevate the spirit. Whether you're seeking spiritual guidance or looking for meaningful gifts, the Krishna Store is here to serve you on your spiritual journey.</h5>
        </div>
        
      </div>
    </div>
  )
}

export default aboutus