import React from 'react'
import "./Header.css"
import Logo from '../Logo/Logo'
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Display logo using Logo component */}
        <Logo />
      </div>

      <div>
        <ul className="menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header