import React from 'react';
// requires the named export, Link, because  <Link> is used in the div.
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
   <div>
      404! <Link to="/">Go Home</Link>
   </div>
);

export default NotFoundPage;