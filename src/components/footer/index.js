import React from 'react';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content flex-column">
            <hr className="footer-content-line"/>
            <h3 className="footer-content-text">Powered by PGS</h3>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
