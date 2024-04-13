import React from 'react'
import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa6";
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
          <hr style={{
            width:'100%',
            border:'0.5px solid white',
            marginBottom:'2vh'
          }}/>
          <div className='footer-content'>
            <div className="info">
              <h4>krishna store</h4>
              <p>namaste</p>
            </div>
            <div className="socialmedia">
              <h4>Social media</h4>

              <div className="links">
                <a href="#"><FaInstagram style={{
                  fontSize: '3.5vh',
                  margin: '0.5vh 0.5vh'}}/></a>
                <a href="#"><FaFacebook style={{
                  fontSize: '3.5vh',
                  margin: '0.5vh 0.5vh'}}/></a>
                <a href="www.instagram.com" target='_blank'><FaTwitter  style={{
                  fontSize: '3.5vh',
                  margin: '0.5vh 0.5vh'}}/></a>
              </div>
            </div>
            <div className="phonenumber">
              <h4>Contact</h4>
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