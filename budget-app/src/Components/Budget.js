import React from 'react';

function Budget({ budget, index }) {
  return (
    <tr className="budget">
      <td>
        <a href={`/budgets/${index}`}>{budget.date}</a>
      </td>
      <td>
        <a href={`/budgets/${index}`}>{budget.category}</a>
      </td>
      <td>
        <a href={`/budgets/${index}`}>{budget.amount}</a>
      </td>
    </tr>
  );
}
export default Budget;
