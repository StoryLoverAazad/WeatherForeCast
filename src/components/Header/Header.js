import React from 'react'
import './Header.css'

const header = () => {

  return (
 <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src="https://uploads-ssl.webflow.com/61f3a8ab34a4598782349a76/61f4351cb2b692cea86fa47b_Hloov%20Logo%20Color.svg" height="25px" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Platform
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Project Tagwaye</a></li>
            <li><a className="dropdown-item" href="#">Project Heart</a></li>
            <li><a className="dropdown-item" href="#">Early Access</a></li>
            <li><a className="dropdown-item" href="#">People</a></li>
            <li><a className="dropdown-item" href="#">Planet</a></li>
            <li><a className="dropdown-item" href="#">Prosperity</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Sectors
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="https://www.hloov.com/sectors">Sectors</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Careers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Students</a></li>
            <li><a className="dropdown-item" href="#">Campus</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">Hloov Internship Summer 2022</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Connect
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
            <li><a className="dropdown-item" href="#">Partners</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">Invertors</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Hloov
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Who we are</a></li>
            <li><a className="dropdown-item" href="#">Careers</a></li>
            <li><a className="dropdown-item" href="#">Diversity</a></li>
          </ul>
        </li>
        
      </ul>
    <div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="material-icons grey-shade">Search</button>
      </form>
    </div>

    </div>
  </div>
</nav>
</>
  )
}

export default header
