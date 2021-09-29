import React from 'react';
import { Formik } from 'formik'
import { Breadcrumb, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LogIn (props) {

  // changed
  const onSubmit = async (values, actions) => {
    try {
      const { response, isError } = await props.logIn(
        values.username,
        values.password
      );
      if (isError) {
        const data = response.response.data;
        for (const value in data) {
          actions.setFieldError(value, data[value].join(' '));
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <Row>
      <Col lg={12}>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Log in</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Card.Header>Log in</Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={onSubmit}
            >
              {({
                errors, // new
                handleChange,
                handleSubmit,
                isSubmitting, // new
                values
              }) => (
                {/* new */}
                <div>
                  {
                    '__all__' in errors &&
                    <Alert variant='danger'>
                      { errors['__all__'] }
                    </Alert>
                  }
                  <Form noValidate onSubmit={handleSubmit}>
                    
                    <Button 
                      block 
                      disabled={isSubmitting}
                      type='submit' variant='primary'>Log in</Button>
                  </Form>
                </div>
              )}
              </Formik>
          </Card.Body>
          <p className='mt-3 text-center'>
            Don't have an account? <Link to='/sign-up'>Sign up!</Link>
          </p>
        </Card>
      </Col>
      
    </Row>
  );
}

export default LogIn;