import React from 'react';
// requires named export, NavLink in the file because it's used in the header.
import { NavLink } from 'react-router-dom';

// this header needs to be rendered on every single page, unlike the other components in routes.
const Header = () => (
   <header>
      <h1>Expense Tracker</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>      Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
         Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
         Help
      </NavLink>
   </header>
);
// This set-up will allow <Header /> to show up on every page that's rendered. By putting it before  <Switch />, it will be rendered every time on the page that has the matching path. 

export default Header;