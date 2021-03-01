import React from 'react'
import logo from '../Logo.svg'
import './nav.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="responsive-logo">
        <img
          src="https://purepng.com/public/uploads/large/google-stadia-logo-3cx.png"
          alt=""
        />
      </div>
      <div className="visible-logo">
        <img src={logo} alt=""/>
      </div>

      <div className="navbar-div">
        <ul className="navbar-block-flex">
          <li>
            <a href="#">About Stadia</a>
          </li>
          <li>
            <a href="#" className="red-link">
              Games
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#" className="red-link">
              Sign in
            </a>
          </li>
          <li>
            <button type="button">Try now</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
