import React from 'react';
import { Link } from 'react-router-dom';

function LogIn (props) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Log in</h1>
      <p>
        Don't have an account? <Link to='/sign-up'>Sign up!</Link>
      </p>
    </div>
  );
}

export default LogIn;