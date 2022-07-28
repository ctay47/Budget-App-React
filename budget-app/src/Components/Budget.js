import React from 'react';
import {Link} from 'react-router-dom'

function Budget({ budget, index }) {
let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
  let options = { month: 'long', day: 'numeric' };
  let newDate = new Date(budget.date);
  newDate = newDate.toLocaleDateString('en-US', options);
  let colorAmount =
    budget.amount > 1000
      ? 'black'
      : budget.amount < 0
      ? 'red'
      : 'black';
  
  
  return (
    <tr className="budgets-table">
      <td >{newDate}</td>

      <td>
        <a href={`/budgets/${index}`}>{budget.category}</a>
      </td>

      <td style={{ color: colorAmount }}>
        {dollarUS.format(budget.amount)}
      
        <Link to={`/budgets/${index}`}></Link>
      </td>
    </tr>
  );
}
export default Budget;
