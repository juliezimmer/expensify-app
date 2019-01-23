import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
   state = {
      calendarFocused: null // passed down to the react-dates component
   }; 
   // this function is called by the react-dates library with an object that has a startDate and endDate, so destructuring should be used.
   onDatesChange = ({ startDate, endDate }) => { 
      // dispatch the correct actions so the filters change
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
   };
   onFocusChange = (calendarFocused) => {
      //implicitly returns an object
      this.setState(() => ({ calendarFocused  }));
   }
   render () {
      return  (
         <div>
            <input 
               type="text" 
               value={this.props.filters.text} 
               onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value));
                  console.log(e.target.value);
               }} 
            />
            <select
               value={this.props.filters.sortBy}
               onChange={(e) => {
                  if (e.target.value === 'date') {
                     this.props.dispatch(sortByDate());
                  } else if (e.target.value === 'amount') {
                     this.props.dispatch(sortByAmount());
                  }
               }} 
            >
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
               startDate={this.props.filters.startDate}
               endDate={this.props.filters.endDate}
               onDatesChange={this.onDatesChange} // function defined above
               focusedInput={this.state.calendarFocused}
               onFocusChange={this.onFocusChange} // this.onFocusChange indicates a method and that method must be defined above prior to 'render'
               showClearDates={true} // 'false' by default. 'true' shows a button to clear the date
               numberOfMonths={1} // limits the months that show in the browser that show to 1 month. 
               isOutsideRange={() => false} // this implicitly returns false every time it runs. Prevents user from chosing a date outside of the set range of dates.
            />
         </div>
      );
   }
};

// this provides access to the entire state via the first argument passed to mapStateToProps and returns an object with whatever is needed in the component. 
const mapStateToProps = (state) => {
   return {
      filters: state.filters // this means that ExpenseListFilters will have access to props.filters.text
   }
};

export default connect(mapStateToProps)(ExpenseListFilters); 


     

