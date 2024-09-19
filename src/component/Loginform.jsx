import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'username':
                if (!value) {
                    newErrors.username = 'Username is required';
                } else {
                    delete newErrors.username;
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (!value) {
                    newErrors.password = 'Password is required';
                } else if (!passwordRegex.test(value)) {
                    newErrors.password = 'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
                } else {
                    delete newErrors.password;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleInputChange = (setter, name) => (e) => {
        const value = e.target.value;
        setter(value);
        validateField(name, value);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Username is required';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(password)) {
            newErrors.password = 'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setAlertMessage('Please correct the errors and try again.');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        axios.post('http://localhost:3001/login', { username, password })
            .then(result => {
                console.log(result);
                if (result.data === "success") {
                    setAuth(true);
                    navigate('/index');
                } else {
                    setAlertMessage('Invalid username or password');
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                }
            })
            .catch(err => {
                console.log(err);
                setAlertMessage('Invalid username or password');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={handleInputChange(setUsername, 'username')}
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={handleInputChange(setPassword, 'password')}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {showAlert && (
                            <Alert variant="danger" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                                {alertMessage}
                            </Alert>
                        )}

                        <Button variant="primary" type="submit" className="mt-4 w-100">
                            Login
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/">Register</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;
