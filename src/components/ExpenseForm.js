import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// creating the date
const now = moment();
console.log(now.format('MMM Do, YYYY'));

// an instance of this class is rendered in AddExpensePage
export default class ExpenseForm extends React.Component {
   //local state object
   // initially uses default values
   state = {
      description:'', 
      note: '',
      amount: '',
      createdAt: moment(), // createdAt is set equal to a new instance of 'moment()'.  This is passed down to <SingleDatePicker as date={this.state.createdAt }
      calendarFocused: false // determines whether the calendar is showing on the screen
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
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // !amount => if there is no amount provided
         this.setState(() => ({ amount: amount }));
      } 
   };
   // onDateChange is called if a date was picked. If the date was cleared, it's called with nothing. To avoid having the function run with nothing, there is a check for a date value first. 
   onDateChange = (createdAt) => {
      if (createdAt) { // if there is a value for 'createdAt', use this.setState.  If there is nothing, do nothing. 
         // state is set to the value of 'createdAt' that was passed into the function
         this.setState(() => ({ createdAt: createdAt })); //updater object that implicitely returns an object 
      };  
   };
   // onFocusChange handler
   onFocusChange = ({ focused }) => { 
      this.setState(() => ({ calendarFocused: focused })); // calendarFocused is set equal to whtever value came back from focused when it was passed in.
   };
   // onSubmit Handler
   onSubmit = (e) => {
      e.preventDefault();
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmit}>
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
               <SingleDatePicker 
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused} // determines whether the calendar is showing. 
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
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