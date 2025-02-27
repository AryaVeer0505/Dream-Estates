import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo"><h2>Logo</h2></div>
        <div className="nav-links">
            <ul>
                <li><NavLink to='/' className={({isActive})=>isActive?"active-link":""}>Home</NavLink></li>
                <li><NavLink to='/listing' className={({isActive})=>isActive?"active-link":""}>Listing</NavLink></li>
                <li><NavLink to='/about' className={({isActive})=>isActive?"active-link":""}>About</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>isActive?"active-link":""}>Contact</NavLink></li>
            </ul>
        </div>
        <div className="nav-btns">
            <NavLink to='/sign-up'><button className='signup-btn'>Sign-up</button></NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar