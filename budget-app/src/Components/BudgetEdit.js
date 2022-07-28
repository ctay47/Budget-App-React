import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function BudgetEdit() {
  let { index } = useParams();
  const nav = useNavigate();

  const [budget, setBudget] = useState({
    date: '',
    name: '',
    amount: 0,
    category: '',
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/budgets/${index}`)
      .then((response) => setBudget(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateBudget = () => {
    axios
      .put(`${API}/budgets/${index}`, budget)
      .then((response) => {
        setBudget(response.data);
        nav(`/budgets/${index}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBudget();
  };

  return (
    <section className="section single-page">
      <div className="section-title">
        <h1>Edit Transaction</h1>
        <div className='underline'></div>
      </div>
      <div className='edit-form'>
        <form className='edit' onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            name="date"
            id="date"
            type="text"
            value={budget.date}
            onChange={handleTextChange}
            placeholder="Date"
            required
          />
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={budget.name}
            onChange={handleTextChange}
            placeholder="Name"
            required
          />
          <label htmlFor="amount">Amount:</label>
          <input
            name="amount"
            id="amount"
            type="number"
            value={budget.amount}
            onChange={handleTextChange}
            placeholder="Amount"
            required
          />
          <label htmlFor="category">Category:</label>
          <input
            name="category"
            id="category"
            type="text"
            value={budget.category}
            onChange={handleTextChange}
            placeholder="Category"
            required
          />

          <input type="submit" />
        </form>
        <Link to={`/budgets/${index}`}>
          <button className='btn'>Back</button>
        </Link>
      </div>
    </section>
  );
}

export default BudgetEdit;
