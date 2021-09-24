import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Route, Switch } from 'react-router-dom'; // changed

import SignUp from './components/SignUp'; // new
import LogIn from './components/LogIn'; // new

import './App.css';

// changed
function App () {
  return (
    <div>
      <Navbar bg='light' expand='lg' variant='light'>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>Taxi</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse></Navbar.Collapse>
      </Navbar>
      <Container className='pt-3'>
        <Switch>
          <Route exact path='/' render={() => (
            <div className='middle-center'>
              <h1 className='landing logo'>Taxi</h1>
              <Link className='btn btn-primary' to='/sign-up'>Sign up</Link>
              <Link className='btn btn-primary' to='/log-in'>Log in</Link>
            </div>
          )} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/log-in' component={LogIn} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
