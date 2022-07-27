import React from 'react';
import { useState, useEffect } from 'react';
import Budget from './Budget';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Budgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/budgets`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let totalAmount = budgets
    .map((budgets) => budgets.amount)
    .reduce((a, b) => Number(a) + Number(b), 0);

  return (
    <div className="Budgets">
      <h1>
        Index:<span>{totalAmount}</span>{' '}
      </h1>

      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Budgets;
