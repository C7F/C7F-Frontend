import React, { useState, useEffect } from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';
import './style.css';

import Card from '../../components/Card';
import Error from '../../components/Error';

import {
    teamNameRegex,
    passwordRegex,
} from '../../utils/constants';

export default function Login() {
    const [teamName, setTeamName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const changeTeamName = ({ target }) => {
        setTeamName(target.value);
    };

    const changePassword = ({ target }) => {
        setPassword(target.value);
    };

    useEffect(() => {
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

        if (validateTeamName() && validatePassword());
    }, [teamName, password]);

    return (
        <div className="mt-5 register-container">
            <Form>
                <Card className="login-card m-auto">
                    <Error>{error}</Error>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
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
