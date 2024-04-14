import React from 'react'
import Shreekrishn from './assets/contact-background.png'
import './contact.css'

function contact() {
  return (
    <div className='contact-krishna-store'>
      <div className="contact-krishna-store-form">
        <form action="">
          <h1>contact us</h1>
          <input id='contact-input' type="text" placeholder='Enter your name ...' required autoFocus/>
          <input id='contact-input' type="email" placeholder='Enter your email...' required/>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <input type="submit" id='contact-submit'placeholder=''/>
        </form>
      </div>
      <div className="contact-krishna-store-form-image"><img src={Shreekrishn} alt="" /></div>
    </div>
  )
}

export default contact