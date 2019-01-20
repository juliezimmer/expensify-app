import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'; // this is the export default in selectors/expenses.js.

// stateless functional Component
const ExpenseList = (props) => (
   <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => { // props.expenses comes from state.expenses, which is the complete array.
         return <ExpenseListItem key={expense.id} {...expense} />;
       })}
   </div>
);

// as the store changes, this function is automatically rerun and gets the fresh updated values in the component. 
const mapStateToProps = (state) => {
   // this returns an object
   return {
      expenses: selectExpenses(state.expenses, state.filters)
   };
};

export default connect(mapStateToProps)(ExpenseList);








