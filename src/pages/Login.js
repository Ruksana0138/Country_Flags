import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button,  } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (pass) => {
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    return pass.length >= 8 && hasUpperCase && hasNumber && hasSymbol;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPass = validatePassword(password);
    
    if (isValidEmail && isValidPass) {
      dispatch(login());
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          
          <p className="text-center mb-4">
            New user? <a href="#create-account">Create an account</a>
          </p>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Username or email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-muted small mt-1">
               
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="remember">
              <Form.Check 
                type="checkbox"
                label="Keep me signed in"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign In
            </Button>
            
            <div className="text-center text-muted mb-3">
              or sign in with
            </div>
            
            <div className="d-flex justify-content-center gap-2">
              <Button variant="outline-secondary" className="rounded-circle p-0" style={{ width: '40px', height: '40px' }}>
                G
              </Button>
              <Button variant="outline-secondary" className="rounded-circle p-0" style={{ width: '40px', height: '40px' }}>
                f
              </Button>
              <Button variant="outline-secondary" className="rounded-circle p-0" style={{ width: '40px', height: '40px' }}>
                in
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;