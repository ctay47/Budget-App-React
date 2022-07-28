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
  
   let dollarUS = Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
   });

  return (
    <section className="section single-page">
      <div className="section-title">
        <h1>
          Balance Total:{''} <span>{dollarUS.format(totalAmount)}</span>
        </h1>
        <div className="underline"></div>
      </div>
      <div>
        
          <table className="budgets-table">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>

            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </table>
        </div>
   
    </section>
  );
}

export default Budgets;
