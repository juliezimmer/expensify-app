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
               // dispatch action to edit the expense
               props.dispatch(editExpense(props.expense.id, expense));
               // Redirect user back to Dashboard Page
               props.history.push('/');
               console.log('updated', expense);
            }}
         />
         <button 
            onClick={() => {
               props.dispatch(removeExpense({ id: props.expense.id })); 
               props.history.push('/');
            }}
         >Remove</button>
      </div>
   );
};

const mapStateToProps = (state, props) => {
   return { // the code on the next line takes advantage of arrow function syntax using an impliit return to shorten the code needed. 
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   };
}; // this provides the component above (EditExpensePage) with access to the expense in question that is being edited. 

export default connect(mapStateToProps)(EditExpensePage);

/*


<ExpenseForm />
        onSubmit={(expense) => {
         console.log('updated', expense);
        }}
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
 connect(mapStateToProps)
*/