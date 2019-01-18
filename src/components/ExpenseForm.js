import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; 

// creating the date
const now = moment();
console.log(now.format('MMM Do, YYYY'));
// an instance of this class is rendered in the AddExpensePage component.
export default class ExpenseForm extends React.Component {
   state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false, // default state
   };
// whenever the text input of the description changes, onDescriptionChange runs.
// onDescriptionChange gets the value of the text from the event object and updates the state using this.setState, and passing in the new value for description. 
   onDesriptionChange = (e) => {
      const description  = e.target.value;
      // the description state is set equal to the value of the description variable. 
      this.setState(() => ({ description: description  }));
      // using ES6 shorthand: 
      //   this.setState(() => ({ description }));
   };
   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note: e.target.value}));
   };
   onAmountChange = (e) => {
      const amount= e.target.value;
      if (amount.match(/ ^\d*(\.\d{0,2})?$/)) {
         this.setState(() => ({amount: amount}));
      }
   };
   onDateChange = (createdAt) => {
      this.setState(() => ({createdAt: createdAt}));
   };
   onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
   };
   render() {
      return (
         <div>
            <form>
               <input 
                  type="text"
                  placeholder="Description"
                  autoFocus 
                  value={this.state.description}  
                  onChange={this.onDescriptionChange}
               />
               <input 
                  type="text"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
               />
               <SingleDatePicker 
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
               />
               <textarea 
                  placeholder="Add a note regarding this expense (optional)" 
                  value={this.state.note}
                  onChange={this.onNoteChange}
                  ></textarea>
               <button>Add Expense</button>
            </form>
         </div>
      )
   }
}

 /*  onDateChange = (createdAt) => {
      if (createdAt) { 
         // state is set to the value of 'createdAt' that was passed into the function
         this.setState(() => ({ createdAt: createdAt })); //updater object that implicitely returns an object 
      };  
   }; 
   
   onSubmit = (e) => {
      e.preventDefault(); */

      
     /* if (!this.state.description || !this.state.amount) {
         // set error state equal to 'Please provide a description and amount for the expense'
         this.setState(() =>({ error: 'Please include a description and amount for each expense submitted'}));
      } else {
         this.setState(() => ({ error: '' }))
         console.log('submitted');
         this.props.onSubmit({
            description: this.state.description,
            // amount isn't in the correct, it's currently a string,so parseFloat is used. parseFloat takes in the string and leaves the decimal in place but converts the string to a number based on usiong base 10. The resulting parsed string is mutliplied by 100 because everything is converted from cents. */
           /* amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      }
   };
} */



   
   