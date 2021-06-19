import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function ExpenseUtils() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  
  function addExpense(date_in, type_in, place_in, money_in) {
    const expense = {
      id: uuid(),
      date: date_in,
      type: type_in,
      place: place_in,
      money: money_in
    };

    const newExpenses = [...expenses, expense];
    newExpenses.sort((a, b) => { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    setExpenses(newExpenses);
    updateTotal(newExpenses, setTotal);

    return newExpenses;
  };

  function destroyExpense(id, setTotal) {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
    updateTotal(newExpenses, setTotal);
  };

  const extractMoney = (expense) => {
    if (expense.type === 'income')
      return Number(expense.money);
    else
      return -Number(expense.money);
  };

  function updateTotal(expenses, setTotal) {
    const sum = expenses.map(extractMoney).reduce((prev, curr) => prev + curr, 0);
    setTotal(sum);
  }

  function updateExpense(id, new_val){
    const target = expenses.filter(expense => expense.id === id);
    const target_idx = expenses.indexOf(target[0]);

    var newExpenses = [...expenses];
    newExpenses[target_idx].date = new_val.date;
    newExpenses[target_idx].type = new_val.type;
    newExpenses[target_idx].money = new_val.money;
    newExpenses[target_idx].place = new_val.place;
    newExpenses.sort((a, b) => { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    

    setExpenses(newExpenses);
    updateTotal(newExpenses, setTotal);
  }

  return {
    expenses, setExpenses,
    total, setTotal,
    addExpense,
    destroyExpense,
    updateExpense
  };
}
