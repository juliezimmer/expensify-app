// Higher Order Components (HOC)
import React from 'react'
import ReactDOM from 'react-dom';

// a regular component in React
const Info = (props) => (
   <div>
      <h1>Info</h1>
      <p>The info is: { props.info }</p>
   </div>
);

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
      <div>
         { props.isAdmin && <p>This is private info. Please don't share!</p> }
         <WrappedComponent {...props} />
      </div>
   );
}; 
// withAdminWarning returns an alternative version of the Info component. 
const AdminInfo = withAdminWarning(Info);

// require Authentication
// this is NOT the HOC; it is just a regular function that returns the HOC
const requireAuthentication = (WrappedComponent) => {
   // this is the HOC (a stateless functional component)
   return (props) => (
      <div>
         {props.isAuthenticated ? (
            <WrappedComponent {...props} />
         ) : (
            <p>Please log in to view the info</p>
         )}
      </div>
   )
};
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>, document.getElementById('app'));

// ReactDOM.render(<Info info="These are the details"/>, document.getElementById('app');

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
