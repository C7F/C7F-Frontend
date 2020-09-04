import React, { useState, useEffect } from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { nameAdded } from '../../slices/teamSlice';

import Card from '../../components/Card';
import Error from '../../components/Error';

import {
    validateEmail,
    validateTeamName,
    validatePassword,
} from '../../utils/validation';

import './style.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [teamName, setTeamName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const changeEmail = ({ target }) => {
        setEmail(target.value);
    };

    const changeTeamName = ({ target }) => {
        setTeamName(target.value);
    };

    const changePassword = ({ target }) => {
        setPassword(target.value);
    };

    useEffect(() => {
        if (
            validateEmail(email, setError)
            && validateTeamName(teamName, setError)
            && validatePassword(password, setError)
        );
    }, [teamName, email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(nameAdded(teamName));
    };

    return (
        <div className="mt-5 register-container">
            <Form onSubmit={handleSubmit}>
                <Card className="register-card m-auto">
                    <Error>{error}</Error>
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Form.Group controlId="teamEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={changeEmail} placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                You will receive a verification email.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="teamUsername">
                            <Form.Label>Team name</Form.Label>
                            <Form.Control type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" required />
                        </Form.Group>

                        <Form.Group controlId="teamPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={changePassword} placeholder="Password" required />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Card>
            </Form>

        </div>
    );
}
