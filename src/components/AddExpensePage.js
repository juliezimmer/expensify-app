import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
   <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
         onSubmit={(expense) => {
            // adds the data to the Redux Store
            props.dispatch(addExpense(expense));
            // this reroutes user to Dashboard page after expense submitted
            // a string, the path, is passed into push().
            props.history.push('/');
         }}
      />
   </div>
);

export default connect()(AddExpensePage);

