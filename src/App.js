import React, { useState } from 'react';
import { 
  Button, Container, Form, Navbar
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Redirect, Route, Switch } from 'react-router-dom';


import { isDriver, isRider } from './services/AuthService'; 
import SignUp from './components/SignUp'; // new
import LogIn from './components/LogIn'; // new

import './App.css';
import axios from 'axios';

import Driver from './components/Driver.js';
import Rider from './components/Rider';

// changed
function App () {
  // new
  const [isLoggedIn, setLoggedIn] = useState(() => {
    return window.localStorage.getItem('taxi.auth') !== null;
  });

  // new
  const logIn = async (username, password) => {
    // const url = '/api/log_in/';
    const url = `${process.env.REACT_APP_BASE_URL}/api/log_in/`;
    try {
      const response = await axios.post(url, { username, password });
      window.localStorage.setItem(
        'taxi.auth', JSON.stringify(response.data)
      );
      setLoggedIn(true);
      // new
      return { response, isError: false };
    }
    catch (error) {
      console.error(error);
      // new
      return { response: error, isError: true };
    }
  };

  const logOut = () => {
    window.localStorage.removeItem('taxi.auth');
    setLoggedIn(false);
  };

  return (
    <div>
      <Navbar bg='light' expand='lg' variant='light'>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>Taxi</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          { /* new */ }
          {
            isLoggedIn && 
            <Form inline className='ml-auto'>
              <Button type='button' onClick={() => logOut()}>Log out</Button>
            </Form>
          }
        </Navbar.Collapse>
      </Navbar>
      <Container className='pt-3'>
        <Switch>
          <Route exact path='/' render={() => (
            <div className='middle-center'>
              <h1 className='landing logo'>Taxi</h1>
              {
                !isLoggedIn && (
                  <>
                    <Link
                      id='signUp'
                      className='btn btn-primary'
                      to='/sign-up'
                    >Sign up</Link>
                    <Link
                      id='logIn'
                      className='btn btn-primary'
                      to='/log-in'
                    >Log in</Link>
                  </>
                )
              }
              {
                isRider() && (
                  <Link
                    className='btn btn-primary'
                    to='/rider'
                  >Dashboard</Link>
                )
              }
              {
                isDriver() && (
                  <Link
                    className='btn btn-primary'
                    to='/driver'
                  >Dashboard</Link>
                )
              }
            </div>
          )} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
