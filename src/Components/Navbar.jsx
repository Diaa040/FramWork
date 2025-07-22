import React, { useEffect } from 'react'
import { NavLink} from 'react-router-dom'

export default function Navbar() {
useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
  <nav className="navbar navbar-expand-sm navbar-light py-4 fixed-top">
    <div className="container">
      <a className="navbar-brand" href='/'>START FRAMEWORK</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}
