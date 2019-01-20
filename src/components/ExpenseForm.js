import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; 

// an instance of this class is rendered in the AddExpensePage component.
export default class ExpenseForm extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         description: props.expense ? props.expense.description : '',
         note: props.expense ? props.expense.note : '',
         amount: props.expense ? (props.expense.amount / 100).toString() : '',
         createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
         calendarFocused: false,
         error: ''
      }
   }  
// whenever the text input of the description changes, onDescriptionChange runs.
// onDescriptionChange gets the value of the text from the event object and updates the state using this.setState, and passing in the new value for description. 
   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };
   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note }));
   };
   onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // '||'  allows user to clear the value from amount input field
         this.setState(() => ({amount }));
      }
   };
   onDateChange = (createdAt) => {
      if (createdAt) {
         this.setState(() => ({createdAt }));
      }   
   };
   onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
   };
   onSubmit = (e) => {
      e.preventDefault(); // prevents browser from going through the full page refresh.
      if (!this.state.description || !this.state.amount) {
         this.setState(() => ({error: "Please add a description and amount for the expense"}));
      } else {
         this.setState(() => ({ error: ''}));
         this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      }
   };
   render() {
      return (
         <div>
         {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit} >
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
                  numberOfMonths={1} // controls how many calendar months show up when the date is clicked. 
                  isOutsideRange={() => false} // determines whether chosen date should be available to pick. This allows all available dates to be chosen.
               />
               <textarea 
                  placeholder="Add a note (optional)" 
                  value={this.state.note}
                  onChange={this.onNoteChange}
               >
               </textarea>
               <button>Add Expense</button>
            </form>
         </div>
      )
   }
}

 
   
   

      




   
   