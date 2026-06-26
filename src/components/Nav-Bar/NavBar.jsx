import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <span>CineSpin</span>
        </div>

        <div className="nav-links">
          <a href="#">Sorteador</a>
        </div>
        <div className="nav-profile">
          <a href="#c"><i className="ph ph-user"></i></a>
        </div>
      </nav>
      </div>
  )
}

export default NavBar