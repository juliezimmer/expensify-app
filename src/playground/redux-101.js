import { createStore } from 'redux'; // called only once

// These are all ACTION GENERATORS for different action objects/actions: 
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
   type: 'INCREMENT', 
   incrementBy: incrementBy // this references the variable incrementBy that was just destructured from it's object.
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
   type: 'DECREMENT',
   decrementBy: decrementBy
});

const setCount = ({ count }) => ({
   type: 'SET',
   count: count
});

const resetCount = () => ({
   type: 'RESET'
});

// Reducers
const countReducer = (state = {count: 0}, action) => { 
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         };
      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
         }; 
      case 'SET':
         return {
            count: action.count
         };
      case 'RESET':
         return {
            count: 0 
         }
      default: // runs if nothing else can or does and it returns state/default state.
         return state;
   }
};

const store = createStore(countReducer);

// UNSUBSCRIBE() is used to watch for changes in the Redux Store. It takes in a function as the first argument and is called every time the store changes. 
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
 
store.dispatch(resetCount());
   
store.dispatch(decrementCount()); 

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));
   
