import React from 'react';
import moment from 'moment';

// creating the date
const now = moment();
console.log(now);

// an instance of this class is rendered in AddExpensePage
export default class ExpenseForm extends React.Component {
   //local state object
   // initially uses default values
   state = {
      description:'', 
      note: '',
      amount: ''
   };
   // this requires the event object,'e',  be passed in as the argument. onDescriptionChange is where the value of the description input lives.
   // whenever the text input of the description changes, onDescriptionChange runs. onDescriptionChange gets the value of the text from the event object and updates the state using this.setState, passing in the new value for description. 
   onDescriptionChange = (e) => {
      const description = e.target.value;
      // Now, set the state
      this.setState(() => ({ description: description })); // the description state is set equal to the value of the description variable. 
   };
   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note: note })); // note state is set equal to the value of the note variable.
   };
   onAmountChange = (e) => {
      const amount = (e.target.value);
      // conditional logic to validate the number entered
      // THEN setState is called after validation is made.
      if (amount.match(/^\d*(\.\d{0,2})?$/)) {
         // what the user entered is a valid amount
         this.setState(() => ({ amount: amount }));
      } 
   };
   render() {
      return (
         <div>
            <form action="">
               <input type="text" 
                  placeholder="Description"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDescriptionChange} 
               />
               <input type="number"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
               />
               <textarea 
                  placeholder="Add a note for the expense (optional)"
                  value={this.state.note}
                  onChange={this.onNoteChange} // onNoteChange defined above.
               >
               </textarea>
               <button>add Expense</button>
            </form>
         </div>
      )
   }
}