import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';

const footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          
        <div className="col-xs-6 col-md-3">
            <h5>Hloov</h5>
            <ul className="footer-links">
              <li><Link to="#">Who we are</Link></li>
              <li><Link to="#">Hloov Hluas</Link></li>
              <li><Link to="#">Hloov Tenet</Link></li>
              <li><Link to="#">Diversity</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Careers</h5>
            <ul className="footer-links">
              <li><Link to="#">Professionals</Link></li>
              <li><Link to="#">Students</Link></li>
              <li><Link to="#">Campus</Link></li>
              <li><Link to="#">Search</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Platform</h5>
            <ul className="footer-links">
              <li><Link to="#">Project Tagwaye</Link></li>
              <li><Link to="#">Project Heart</Link></li>
              <li><Link to="#">Early Access</Link></li>
              <li><Link to="#">Support</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Sectors</h5>
            <ul className="footer-links">
              <li><Link to="#">Built Environment</Link></li>
              <li><Link to="#">Real Estate</Link></li>
              <li><Link to="#">Healthcare</Link></li>
              <li><Link to="#">Hospitality</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Connect</h5>
            <ul className="footer-links">
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Blogs And Stories</Link></li>
              <li><Link to="#">Hloov Partners</Link></li>
              <li><Link to="#">Investor Relations</Link></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h3>Be the first to know</h3>
            <ul className="footer-links">
              <li><Link to="#">Join Our Newsletter</Link></li>
            </ul>
          </div>
        </div>
      </div>

      

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">&copy; Copyright 2022 Hloov. All rights reserved. 
            </p>
            <Link to="#">Privacy</Link>
            <Link to="#">Terms</Link>
            <Link to="#">Trademarks</Link>
          </div>

          

        </div>
      </div>
</footer>
    </>
  )
}

export default footer
