import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
   <div>
      <h1>Add Expense</h1>
      <ExpenseForm />
   </div>
);

export default connect()(AddExpensePage);
/* 
onSubmit={(expense) => {
   props.dispatch(addExpense(expense));
   // this helps reroute user back to Dashboard page
   // a string, the path, is passed into push.
   props.history.push('/');
}}
*/
