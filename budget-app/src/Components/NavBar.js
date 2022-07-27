import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/budgets">Budget App</Link>
      </h1>
      <button>
        <Link to="/budgets/new">New Transaction</Link>
      </button>
    </nav>
  );
}
