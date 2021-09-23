import React from 'react';
import { Link } from 'react-router-dom';

function SignUp (props) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Sign up</h1>
      <p>
        Already have an account? <Link to='/log-in'>Log in!</Link>
      </p>
    </div>
  );
}

export default SignUp;