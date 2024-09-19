import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
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
            case 'email':
                if (!value) {
                    newErrors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Email address is invalid';
                } else {
                    delete newErrors.email;
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
            case 'confirmpassword':
                if (!value) {
                    newErrors.confirmpassword = 'Confirm Password is required';
                } else if (value !== password) {
                    newErrors.confirmpassword = 'Passwords do not match';
                } else {
                    delete newErrors.confirmpassword;
                }
                break;
            case 'dateofbirth':
                if (!value) {
                    newErrors.dateofbirth = 'Date of Birth is required';
                } else {
                    delete newErrors.dateofbirth;
                }
                break;
            case 'gender':
                if (!value) {
                    newErrors.gender = 'Gender is required';
                } else {
                    delete newErrors.gender;
                }
                break;
            case 'phonenumber':
                const phoneRegex = /^\d{10}$/;
                if (!value) {
                    newErrors.phonenumber = 'Phone Number is required';
                } else if (!phoneRegex.test(value)) {
                    newErrors.phonenumber = 'Phone Number must be 10 digits and it must be number';
                } else {
                    delete newErrors.phonenumber;
                }
                break;
            case 'address':
                if (!value) {
                    newErrors.address = 'Address is required';
                } else {
                    delete newErrors.address;
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
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(password)) {
            newErrors.password = 'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
        }
        if (!confirmpassword) {
            newErrors.confirmpassword = 'Confirm Password is required';
        } else if (confirmpassword !== password) {
            newErrors.confirmpassword = 'Passwords do not match';
        }
        if (!dateofbirth) {
            newErrors.dateofbirth = 'Date of Birth is required';
        }
        if (!gender) {
            newErrors.gender = 'Gender is required';
        }
        const phoneRegex = /^\d{10}$/;
        if (!phonenumber) {
            newErrors.phonenumber = 'Phone Number is required';
        } else if (!phoneRegex.test(phonenumber)) {
            newErrors.phonenumber = 'Phone Number must be 10 digits and it must be number';
        }
        if (!address) {
            newErrors.address = 'Address is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setAlertMessage('Please fill out all fields correctly.');
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        axios.post('http://localhost:3001/register', { username, password, confirmpassword, email, dateofbirth, gender, phonenumber, address })
            .then(result => {
                console.log(result);
                setAlertMessage('Registration successful!');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    navigate('/login');
                }, 3000);
            })
            .catch(err => {
                console.log(err);
                setAlertMessage('Registration failed. Please try again.');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Register</h2>
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

                        <Form.Group controlId="email" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={handleInputChange(setEmail, 'email')}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
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

                        <Form.Group controlId="confirmpassword" className="mt-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmpassword}
                                onChange={handleInputChange(setConfirmPassword, 'confirmpassword')}
                                isInvalid={!!errors.confirmpassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmpassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="dateofbirth" className="mt-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                value={dateofbirth}
                                onChange={handleInputChange(setDateOfBirth, 'dateofbirth')}
                                isInvalid={!!errors.dateofbirth}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.dateofbirth}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="gender" className="mt-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                value={gender}
                                onChange={handleInputChange(setGender, 'gender')}
                                isInvalid={!!errors.gender}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.gender}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="phonenumber" className="mt-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                value={phonenumber}
                                onChange={handleInputChange(setPhoneNumber, 'phonenumber')}
                                isInvalid={!!errors.phonenumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phonenumber}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="address" className="mt-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={handleInputChange(setAddress, 'address')}
                                isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.address}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {showAlert && (
                            <Alert variant={alertMessage === 'Registration successful!' ? 'success' : 'danger'} className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                                {alertMessage}
                            </Alert>
                        )}

                        <Button variant="primary" type="submit" className="mt-4 w-100">
                            Register
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        Already have an Account? <Link to="/login">Login</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
