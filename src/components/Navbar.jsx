import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-dark py-4 text-white navbar-dark bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DELIVERNOW</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto lead">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    </div>


        
        
    )
}

export default Navbar
