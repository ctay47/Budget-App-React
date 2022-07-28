import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function BudgetNew() {
  const nav = useNavigate();
  const [budget, setBudget] = useState({
    date: '',
    name: '',
    amount: 0,
    category: '',
  });

  const addBudget = () => {
    axios
      .post(`${API}/budgets`, budget)
      .then((response) => nav(`/budgets`))
      .catch((error) => console.budget(error));
  };

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBudget();
  };

  return (
    <section className='section single-page'>
      <div className="section-title">
        <h1>New Transaction</h1>
        <div className='underline'></div>
      </div>
      <div className='new-form'>
        <form className='new' onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name='date'
            type="text"
            value={budget.date}
            placeholder="Date"
            onChange={handleTextChange}
          />
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={budget.name}
            placeholder="Name"
            onChange={handleTextChange}
          />
          <label htmlFor="from">Category:</label>
          <input
            id="category"
            name="category"
            type="text"
            value={budget.category}
            placeholder="Category"
            onChange={handleTextChange}
          />
          <label htmlFor="amount">Amount:</label>
          <input
            name="amount"
            type="number"
            id="amount"
            value={budget.amount}
            placeholder="Amount"
            onChange={handleTextChange}
          />
          <input className="btn" type="submit" />
        </form>
      </div>
    </section>
  );
}
export default BudgetNew;
