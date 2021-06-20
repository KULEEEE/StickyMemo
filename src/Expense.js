import React, { useState } from 'react';
import { ExpenseUtils } from './ExpenseUtils';

export function Expense() {
  const { expenses, setExpenses,
    total, setTotal,
    addExpense,
    destroyExpense,
    updateExpense } = ExpenseUtils();

  return (
    <div className="content-expense">
      <table>
        <tbody>
          <ExpenseHeader expenses={expenses} addExpense={addExpense} setTotal={setTotal} />
          {expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} updateExpense={updateExpense} setTotal={setTotal} destroyExpense={destroyExpense} />
          ))}
          <ExpenseFooter total={total} />
        </tbody>
      </table>
    </div>
  );
}

function ExpenseHeader({ addExpense }) {
  const [date, setDate] = useState('2021-01-01'); // when
  const [type, setType] = useState('income'); // income or expense, income is default
  const [place, setPlace] = useState(''); // where
  const [money, setMoney] = useState(''); // how much

  const onDateChange = (event) => {
    setDate(event.target.value);
  };
  const onTypeChange = (event) => {
    setType(event.target.value);
  };
  const onPlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const onMoneyChange = (event) => {
    setMoney(event.target.value);
  };

  const submitExpense = (event) => {
    if (event.key !== 'Enter')
      return;

    addExpense(date, type, place, money);

    // reset to default value
    setDate('2021-01-01');
    setType('income');
    setPlace('');
    setMoney('');
  };

  return (
    <tr className='expense-header'>
      <td>
        <input
          type='date'
          value={date}
          className = "input-date"
          // style = {{"width":"100px", "font-size" : "x-small", "height":"20px"}}
          onChange={onDateChange}
          autoFocus />
      </td>
      <td>
        <select style = {{"font-size" : "small", "height":"20px"}} name="type" onChange={onTypeChange} defaultValue="">
          <option value="income">수입</option>
          <option value="expense">지출</option>
        </select>
      </td>
      <td>
        <input placeholder='Money'
          value={money}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onMoneyChange}
          onKeyUp={submitExpense} />
      </td>
      <td>
        <input placeholder='Place'
          value={place}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onPlaceChange}
          onKeyUp={submitExpense} />
      </td>
    </tr>
  );

}

function ExpenseItem({ expense, updateExpense, setTotal, destroyExpense}) {
  var new_val = expense;

  const onDateChange = (event) => {
    new_val.date = event.target.value;

    updateExpense(expense.id, new_val);
  };
  
  const onTypeChange = (event) => {
    new_val.type = event.target.value;
    updateExpense(expense.id, new_val);
  };

  const onPlaceChange = (event) => {
    new_val.place = event.target.value;
    updateExpense(expense.id, new_val);
  };

  const onMoneyChange = (event) => {
    new_val.money = event.target.value;
    updateExpense(expense.id, new_val);
  };

  return (
    <tr className='expense-header'>
      <td>
        <input type='date' className = "input-date" value={expense.date} onChange={onDateChange}  />
      </td>
      <td>
        <select name="type" onChange={onTypeChange} value={expense.type} style = {{"font-size" : "small", "height":"20px"}}>
          <option value="income">수입</option>
          <option value="expense">지출</option>
        </select>
      </td>
      <td>
        <input placeholder='Money' value={expense.money} onChange={onMoneyChange} style = {{"width" : "60px", "height" : "20px"}} />
      </td>
      <td>
        <input placeholder='Place'
          value={expense.place}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onPlaceChange} />
      </td>
      <td><button onClick={() => destroyExpense(expense.id, setTotal)}>-</button></td>
    </tr>
  );

}
function ExpenseFooter({ total }) {
  return (
    <tr className='expense-footer'>
      <td colSpan="2">총계</td>
      <td colSpan="2">{total}</td>
    </tr>
  );

}
