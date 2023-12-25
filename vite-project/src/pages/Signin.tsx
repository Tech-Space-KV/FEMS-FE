import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import backgroundImage from '../assets/signin_bg.svg';
import './Signin.css';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Change the background image of the body tag when the component mounts
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Clean up the effect by resetting the background image when the component unmounts
    return () => {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundSize = 'auto';
      document.body.style.backgroundPosition = 'initial';
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  const formContainerStyle = {
    width: '450px', // Set the width of the form container
  };

  function gotoSignUp() {
    navigate('/signup');
  }

  function gotoAdmin() {
    navigate('/admin/dashboard');
  }

  return (
    <>
      <div>
        <Container className="d-flex" style={formContainerStyle}>
          <Form className="p-4 border rounded shadow-lg bg-light" style={{ width: '100%' }}>

            <h1 className="mb-4 text-center">Sign In</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100" onClick={gotoAdmin}>
              Sign in
            </Button>

            <div className="mt-3 text-center">
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={gotoSignUp}>
                  Sign Up
                </button>
              </p>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
