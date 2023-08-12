import React from 'react';
import favicon from './favicon.png';

function Navbar() {
    return (
    <div className="Navbar">
      <nav className="navbar navbar-dark navbar-expand bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#"><img src={favicon} width="40" height="40" alt="27"></img></a>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link active" href="/#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#">Page 1</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#">Page 2</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#">Page 3</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;