import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../assets/logo-for-krishna-store2.png';

import './nav.css'

function Nav() {
  return (
    <div className='navbar'>
        <div className="logo"><img src={Logo} alt="img" /></div>
        <div className="link">
            <a href="/">home</a>
            <a href="/aboutus">about us</a>
            <a href="/contact">contact</a>
            <a href="/product">products</a>
        </div>
        <div className="icon"><a href="#"><FaCartShopping style={{color: 'black'}} /><span>0</span></a></div>
    </div>
  )
}

export default Nav