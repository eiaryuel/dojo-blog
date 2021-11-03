import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>The Page Cannot Be Found</p>
      <Link to="/">Go Back To Homepage</Link>
    </div>
  );
};

export default NotFound;
