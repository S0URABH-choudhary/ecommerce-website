import React from 'react'
import Shreekrishn from './assets/contact-background.png'
import './contact.css'

function contact() {
  return (
    <div className='contact-krishna-store'>
      <div className="contact-krishna-store-form">
        <form action="https://api.web3forms.com/submit" method='post'>
          <h1>contact us</h1>
          <input type="hidden" name="access_key" value="b3d0ba4b-61da-46e3-ac88-8638ad76c5d2"/>
          <input id='contact-input' type="text" placeholder='Enter your name ...' required autoFocus/>
          <input id='contact-input' type="email" placeholder='Enter your email...' required/>
          <textarea id="contact-textarea" name="message"  cols="30" rows="10"></textarea>
          <input type="submit" id='contact-submit'placeholder=''/>
        </form>
      </div>
      <div className="contact-krishna-store-form-image"><img src={Shreekrishn} alt="" /></div>
    </div>
  )
}

export default contact