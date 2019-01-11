import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
   <div>
      <h1>Expense List</h1>
      { props.expenses.length } 
   </div>
);

// as the store changes, this function is automatially rerun and getting the fresh updated values in the component. 
const mapStateToProps = (state) => {
   return {
      expenses: state.expenses,
      filters: state.filters
   };
};

export default connect(mapStateToProps)(ExpenseList);


