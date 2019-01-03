import { createStore } from 'redux'; // called only once

// make a Store
const store = createStore((state = {count: 0}) => { // state is current state
   return state; // this is a valid call to createStore; it does nothing, but it is valid.
});

// store method
// returns current state object
console.log(store.getState()); // { count: 0 }