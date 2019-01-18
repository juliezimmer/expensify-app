import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'; 

const EditExpensePage = (props) => {
   console.log(props);
   return (
      <div>
        <ExpenseForm />
        onSubmit={(expense) => {
         console.log('updated', expense);
        }}
      </div>
   )
};
// state is passed in because that's where the expenses array lives.
// the second argument passed into mapStateToProps is 'props'
// this gives the component access to the expense 
const mapStateToProps = (state, props) => {
   return { // searching the expenses array with the .find method
      // if the callback returns true, the item was found
      expense: state.expenses.find((expense) => {  
         return expense.id === props.match.params.id
      })
   };
};
// mapStateToProps has to be passed into connect().  This insures that the expense prop is accurately set.
export default connect(mapStateToProps)(EditExpensePage);