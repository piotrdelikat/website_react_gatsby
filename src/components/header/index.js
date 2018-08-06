import React from 'react';
import Link from "gatsby-link"
import logo from './logo.png';
import './_header.scss';

const activeStyle = {
  color: 'orange',
  borderBottom: 'solid 2px orange'
}

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row mw-100">
        <div className="header-content">
          <img className="header-content-logo" src={logo} alt="Logo" />
        </div>
      </div>
      <div className ="row mw-100">
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <Link to="/"
                    activeStyle={{...activeStyle}}>
                ABOUT US
              </Link>
            </li>
            <li className="header-nav-list-item">
              <Link to="/skicams"
                    activeStyle={{...activeStyle}}>
                SKICAMS
              </Link>
            </li>
            <li className="header-nav-list-item">
              <Link to="/contact"
                    activeStyle={{...activeStyle}}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <hr className="header-line"/>
  </header>);

export default Header;
