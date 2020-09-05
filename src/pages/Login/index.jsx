import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    Button,
} from 'react-bootstrap';
import './style.css';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import Card from '../../components/Card';
import Error from '../../components/Error';

import { nameUpdate, fetchToken } from '../../slices/teamSlice';

import {
    validateTeamName,
    validatePassword,
} from '../../utils/validation';

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

    const dispatch = useDispatch();
    const history = useHistory();

    const redirectToChallenges = () => history.push('/challenges');

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(nameUpdate(teamName));
        dispatch(fetchToken({ teamName, password }))
            .then(unwrapResult)
            .then(redirectToChallenges)
            .catch(() => {
                setError('Login failed!');
            });
    };

    useEffect(() => {
        if (validateTeamName(teamName, setError) && validatePassword(password, setError));
    }, [teamName, password]);

    return (
        <div className="mt-5 register-container">
            <Form onSubmit={handleSubmit}>
                <Card className="login-card m-auto">
                    <Error>{error}</Error>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
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
