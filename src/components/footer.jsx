import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="upper-part">
          <div className="shortcontent">
            <h4>
            Wanna know more about us !
            </h4>
            <button className="btn"> <a href="/aboutus">Know more</a></button>
          </div>  
          <div className='footer-content'>
            <div className="info">
              <h4>krishna store</h4>
              <p>namaste</p>
            </div>
            <div className="socialmedia">
              <h4>follow us</h4>

              <div className="links">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
            <div className="phonenumber">
              <h4>call us</h4>
              <h4></h4>
            </div>
          </div>
        </div>
        <div className="bottom-part">
            <h4>This webApp devloped by Saurabh Choudhary</h4>
            <div className="icons">visa,strive,paypal</div>
        </div>
    </div>
  )
}

export default Footer