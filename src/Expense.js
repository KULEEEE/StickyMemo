import React, { useState, useEffect } from 'react';
import { ExpenseUtils } from './ExpenseUtils';
import delete_icon from './delete-icon.png';
import {Getjson, Setjson} from './Makejson';

export function Expense({data}) {
  const { expenses, setExpenses,
    total, setTotal,
    addExpense,
    destroyExpense,
    updateExpense} = ExpenseUtils();
  const expensearr = [];
  data.total = total;

  return (
    <div className="content-expense">
      <table>
        <thead>
        <ExpenseHeader expenses={expenses} addExpense={addExpense} setTotal={setTotal} data={data}/>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} updateExpense={updateExpense} setTotal={setTotal} destroyExpense={destroyExpense} expensearr={expensearr} data={data}/>
          ))}
        </tbody>
        <ExpenseFooter total={total} />
        
      </table>
    </div>
  );
}

function ExpenseHeader({ addExpense, data }) {
  const [date, setDate] = useState('2021-01-01'); // when
  const [type, setType] = useState('income'); // income or expense, income is default
  const [place, setPlace] = useState(''); // where
  const [money, setMoney] = useState(''); // how much

  useEffect(()=>{
    const js = Getjson();
    console.log(js);
    for(var i=0; i<js.length; i++){
        if(js[i].noteid === data.noteid){
            for(var j=0; j<js[i].arr.length; j++){
              addExpense(js[i].arr[j].expensedate, js[i].arr[j].expensetype, js[i].arr[j].expenseplace, js[i].arr[j].expensemoney);
            }
        }
    }
},[]);

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
    <tr className='expense-header' scope='row'>
      <th>
        <input
          type='date'
          value={date}
          className = "input-date"
          // style = {{"width":"100px", "font-size" : "x-small", "height":"20px"}}
          onChange={onDateChange}
          autoFocus />
      </th>
      <th>
        <select style = {{"font-size" : "small", "height":"20px"}} name="type" onChange={onTypeChange} defaultValue="">
          <option value="income">수입</option>
          <option value="expense">지출</option>
        </select>
      </th>
      <th>
        <input type='number' placeholder='금액'
          value={money}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onMoneyChange}
          onKeyUp={submitExpense} />
      </th>
      <th>
        <input placeholder='무엇을 했나요?'
          value={place}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onPlaceChange}
          onKeyUp={submitExpense} />
      </th>
    </tr>
  );

}

function ExpenseItem({ expense, updateExpense, setTotal, destroyExpense, expensearr, data}) {
  var new_val = expense;
  const expenseobj = new Object();

  expenseobj.expenseid = expense.id;
  expenseobj.expensedate = expense.date;
  expenseobj.expensetype = expense.type;
  expenseobj.expenseplace = expense.place;
  expenseobj.expensemoney = expense.money;
  expensearr.push(expenseobj);
  const uniquearr = expensearr.reduceRight((prev, now) => {
    if (!prev.some(obj => obj.expenseid === now.expenseid )) {
      prev.push(now);
    }
    return prev;
  }, []);
  const reverse = uniquearr.reverse();
  data.arr = reverse;
  Setjson(data);
  console.log(Getjson());


  const onDateChange = (event) => {
    new_val.date = event.target.value;
    updateExpense(expense.id, new_val);
    expenseobj.expensedate = event.target.value;
    expenseobj.expensetype = expense.type;
    expenseobj.expenseplace = expense.place;
    expenseobj.expensemoney = expense.money;
    expensearr.push(expenseobj);
    const uniquearr = expensearr.reduceRight((prev, now) => {
      if (!prev.some(obj => obj.expenseid === now.expenseid )) {
        prev.push(now);
      }
      return prev;
    }, []);
    const reverse = uniquearr.reverse();
    data.arr = reverse;
    Setjson(data);
  };
  
  const onTypeChange = (event) => {
    new_val.type = event.target.value;
    updateExpense(expense.id, new_val);
    expenseobj.expensedate = expense.date;
    expenseobj.expensetype = event.target.value;
    expenseobj.expenseplace = expense.place;
    expenseobj.expensemoney = expense.money;
    expensearr.push(expenseobj);
    const uniquearr = expensearr.reduceRight((prev, now) => {
      if (!prev.some(obj => obj.expenseid === now.expenseid )) {
        prev.push(now);
      }
      return prev;
    }, []);
    const reverse = uniquearr.reverse();
    data.arr = reverse;
    Setjson(data);
  };

  const onPlaceChange = (event) => {
    new_val.place = event.target.value;
    updateExpense(expense.id, new_val);
    expenseobj.expensedate = expense.date;
    expenseobj.expensetype = expense.type;
    expenseobj.expenseplace = event.target.value;
    expenseobj.expensemoney = expense.money;
    expensearr.push(expenseobj);
    const uniquearr = expensearr.reduceRight((prev, now) => {
      if (!prev.some(obj => obj.expenseid === now.expenseid )) {
        prev.push(now);
      }
      return prev;
    }, []);
    const reverse = uniquearr.reverse();
    data.arr = reverse;
    Setjson(data);
  };

  const onMoneyChange = (event) => {
    new_val.money = event.target.value;
    updateExpense(expense.id, new_val);
    expenseobj.expensedate = expense.date;
    expenseobj.expensetype = expense.type;
    expenseobj.expenseplace = expense.place;
    expenseobj.expensemoney = event.target.value;
    expensearr.push(expenseobj);
    const uniquearr = expensearr.reduceRight((prev, now) => {
      if (!prev.some(obj => obj.expenseid === now.expenseid )) {
        prev.push(now);
      }
      return prev;
    }, []);
    const reverse = uniquearr.reverse();
    data.arr = reverse;
    Setjson(data);
  };

  return (
    <tr className='expense-header' scope='row'>
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
        <input style = {{"width" : "60px", "height" : "20px"}} placeholder='금액' type='number' value={expense.money} onChange={onMoneyChange} />
      </td>
      <td>
        <input placeholder='무엇을 했나요?'
          value={expense.place}
          style = {{"width" : "60px", "height" : "20px"}}
          onChange={onPlaceChange} />
      </td>
      <td>
        <button className = "expense-delete" onClick={() => destroyExpense(expense.id, setTotal)}>
          <img src={delete_icon} alt='delete' className='deleteIcon'/>
        </button>
      </td>
    </tr>
  );

}
function ExpenseFooter({ total }) {
  return (
    <tfoot className='expense-footer'>
      <td colSpan="2">총계</td>
      <td colSpan="2">{total}</td>
    </tfoot>
  );

}
/*JSON
arr{
  expensedate
  expenseid
  expensemoney
  expenseplace
  expensetype
}
date
noteid
section
total
type
*/