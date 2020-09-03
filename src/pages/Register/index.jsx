import React, { useState, useEffect } from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';

import Card from '../../components/Card';
import Error from '../../components/Error';

import './style.css';

import {
    teamNameRegex,
    emailRegex,
    passwordRegex,
} from '../../utils/constants';

export default function Register() {
    const [email, setEmail] = useState('');
    const [teamName, setTeamName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        const validateEmail = () => {
            if (!emailRegex.test(email.toLowerCase())) {
                setError('Invalid email!');
                return false;
            }
            setError('');
            return true;
        };

        const validateTeamName = () => {
            if (!teamNameRegex.test(teamName)) {
                setError('Invalid team name!');
                return false;
            }
            setError('');
            return true;
        };

        const validatePassword = () => {
            if (!passwordRegex.test(password)) {
                setError('Invalid password!');
                return false;
            }
            setError('');
            return true;
        };

        if (validateEmail() && validateTeamName() && validatePassword());
    }, [teamName, email, password]);

    return (
        <div className="mt-5 register-container">
            <Form>
                <Card className="register-card m-auto">
                    <Error>{error}</Error>
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Form.Group controlId="teamEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={changeEmail} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                You will receive a verification email.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="teamUsername">
                            <Form.Label>Team name</Form.Label>
                            <Form.Control type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" />
                        </Form.Group>

                        <Form.Group controlId="teamPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={changePassword} placeholder="Password" />
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
