import React from 'react'
import './Footer.css';

const footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          
        <div className="col-xs-6 col-md-3">
            <h5>Hloov</h5>
            <ul className="footer-links">
              <li><a href="#">Who we are</a></li>
              <li><a href="#">Hloov Hluas</a></li>
              <li><a href="#">Hloov Tenet</a></li>
              <li><a href="#">Diversity</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Careers</h5>
            <ul className="footer-links">
              <li><a href="#">Professionals</a></li>
              <li><a href="#">Students</a></li>
              <li><a href="#">Campus</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Platform</h5>
            <ul className="footer-links">
              <li><a href="#">Project Tagwaye</a></li>
              <li><a href="#">Project Heart</a></li>
              <li><a href="#">Early Access</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Sectors</h5>
            <ul className="footer-links">
              <li><a href="#">Built Environment</a></li>
              <li><a href="#">Real Estate</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Hospitality</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Connect</h5>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blogs And Stories</a></li>
              <li><a href="#">Hloov Partners</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h3>Be the first to know</h3>
            <ul className="footer-links">
              <li><a href="#">Join Our Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>

      

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">&copy; Copyright 2022 Hloov. All rights reserved. 
            </p>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Trademarks</a>
          </div>

          

        </div>
      </div>
</footer>
    </>
  )
}

export default footer
