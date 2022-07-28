import React from 'react';
import logo from './logobud.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <header class="info">
      <div class="section-center info-center">
        <article >
          <div class="underline"></div>
          <h1>Welcome to Budget App</h1>

          <div>
            <Link to={`/budgets`}>
              <button className="btn">Transaction</button>
            </Link>
          </div>
        </article>
        <article class="info-img">
          <img src={logo} class="info-photo" alt="info-christine_taylor" />
        </article>
      </div>
    </header>
  );
}

export default Home;
