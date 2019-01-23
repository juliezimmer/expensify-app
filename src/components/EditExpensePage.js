import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
   return (
      <div>
         <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
               props.dispatch(editExpense(id, expense));
               props.history.push('/');
               console.log('updated', expense);
            }}
         />
         <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push('/');
         }}> Remove</button> 
      </div>
   );
};

const mapStateToProps = (state, props ) => {
   return {
      expense: state.expenses.find((expense) =>  expense.id === props.match.params.id) 
   };
};
// mapStateToProps has to be passed into connect().  This insures that the expense prop is accurately set.
export default connect(mapStateToProps)(EditExpensePage);




