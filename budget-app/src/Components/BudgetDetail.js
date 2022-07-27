import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    axios.delete(`${API}/budgets/${index}`).then((response) => nav('/budget'));
  };

  return (
    <div>
      <h1>Budget Show Page</h1>
      <span>
        {' '}
        <h2>Date: {budget.date}</h2>
      </span>
      <span>
        {' '}
        <h2>Name: {budget.name}</h2>
      </span>
      <span>
        {' '}
        <h2> Category: {budget.category}</h2>
      </span>
      <span>
        {' '}
        <h2> Amount: ${budget.amount}</h2>
      </span>
      <Link to={`/budgets`}>
        <button>Back</button>
      </Link>
      <Link to={`/budgets/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/budgets`}>
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  );
}

export default BudgetDetail;
