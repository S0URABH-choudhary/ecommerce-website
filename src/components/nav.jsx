import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../assets/logo.png';
import './nav.css'

function Nav() {
  return (
    <div className='navbar'>
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="links">
            <a href="#">home</a>
            <a href="#">about us</a>
            <a href="#">contact</a>
            <a href="#">products</a>
        </div>
        <div className="icon"><a href="#"><FaCartShopping /><span>0</span></a></div>
    </div>
  )
}

export default Nav