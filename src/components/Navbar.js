import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">News-api</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/new">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#"  aria-disabled="true">Buisness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#"  aria-disabled="true">Political</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/login"  aria-disabled="true">Login</Link>
        </li>
        

      </ul>
    </div>
  </div>
</nav>
  
  
  </>
  )
}
