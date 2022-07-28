import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './logobud.svg';

const API = process.env.REACT_APP_API_URL;

function BudgetDetail() {
  const { index } = useParams();

  const nav = useNavigate();

  const [budget, setBudget] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/budgets/${index}`)
      .then((response) => {
        setBudget(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [index]);

  const handleDelete = () => {
    axios.delete(`${API}/budgets/${index}`).then((response) => nav('/budgets'));
  };
let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
 
  
  
  return (
    <section className="budgets-info">
      <div className="section-title">
        <h1>Budget Page</h1>
        <div className="underline"></div>
      </div>
      <section className="section">
        <div className="section-center budgets-page-center">
          <article className="single-budget">
            <div className="budget-details">
              <img src={logo} class="nav2-logo" alt="nav2-logo"></img>
            </div>
            <div className="budget-details">
              <span>
                {' '}
                <h2 className="h2">Date: {budget.date}</h2>
              </span>
              <span>
                {' '}
                <h2 className="h2">Name: {budget.name}</h2>
              </span>
              <span>
                {' '}
                <h2 className="h2"> Category: {budget.category}</h2>
              </span>
              <span>
                {' '}
                <h2 className="h2">
                  {' '}
                  Amount: {dollarUS.format(budget.amount)}
                  
                </h2>
              </span>
            </div>
            <Link to={`/budgets`}>
              <button className="btn">Back</button>
            </Link>
            <Link to={`/budgets/${index}/edit`}>
              <button className="btn">Edit</button>
            </Link>
            <Link to={`/budgets`}>
              <button className="btn" onClick={handleDelete}>
                Delete
              </button>
            </Link>
          </article>
        </div>
      </section>
    </section>
  );
}

export default BudgetDetail;
