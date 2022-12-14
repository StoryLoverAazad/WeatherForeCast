import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const header = () => {

  return (
 <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src="https://uploads-ssl.webflow.com/61f3a8ab34a4598782349a76/61f4351cb2b692cea86fa47b_Hloov%20Logo%20Color.svg" height="25px" alt=' '/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link to="#"className="nav-link"  id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Platform
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="#"className="dropdown-item" >Project Tagwaye</Link></li>
            <li><Link to="#"className="dropdown-item" >Project Heart</Link></li>
            <li><Link to="#"className="dropdown-item" >Early Access</Link></li>
            <li><Link to="#"className="dropdown-item" >People</Link></li>
            <li><Link to="#"className="dropdown-item" >Planet</Link></li>
            <li><Link to="#"className="dropdown-item" >Prosperity</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="#"className="nav-link"  id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Sectors
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="#"className="dropdown-item" href="https://www.hloov.com/sectors">Sectors</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="#"className="nav-link"  id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Careers
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="#"className="dropdown-item" >Students</Link></li>
            <li><Link to="#"className="dropdown-item" >Campus</Link></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><Link to="#"className="dropdown-item" >Hloov Internship Summer 2022</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="#"className="nav-link"  id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Connect
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="#"className="dropdown-item" >Contact Us</Link></li>
            <li><Link to="#"className="dropdown-item" >Partners</Link></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><Link to="#"className="dropdown-item" >Invertors</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link to="#"className="nav-link"  id="navbarDropdown" role="botton" data-bs-toggle="dropdown" aria-expanded="false">
            Hloov
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="#"className="dropdown-item" >Who we are</Link></li>
            <li><Link to="#"className="dropdown-item" >Careers</Link></li>
            <li><Link to="#"className="dropdown-item" >Diversity</Link></li>
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

export default header;
