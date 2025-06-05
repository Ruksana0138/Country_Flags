import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { validateEmail, validatePassword } from '../utils/validation';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPass = validatePassword(password);

    
    if (isValidEmail && isValidPass) {
      onSubmit(true);
    } else {
      setValidated(true);
      onSubmit(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={validated && !validateEmail(email)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="password">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            required
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={validated && !validatePassword(password)}
          />
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </Button>
          <Form.Control.Feedback type="invalid">
            Password must be at least 8 characters with 1 uppercase, 1 number, and 1 symbol
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Button variant="dark" type="submit" className="w-100">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;