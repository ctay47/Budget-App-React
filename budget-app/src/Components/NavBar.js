import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logobud.svg'



export default function NavBar() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
        <Link to="/budgets">  <img src={logo} class="nav-logo" alt="nav-logo" /></Link>
        </div>
        <ul className='nav-links'>
          
          <li>
            <button className="btn">
              <Link to="/budgets/new">New Transaction</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
