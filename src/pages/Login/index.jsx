import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';

import './style.scss';

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

    const redirectToChallenges = () => history.push('/challenge');

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
            <form onSubmit={handleSubmit}>
                <Card className="login-card m-auto">
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Error>{error}</Error>
                        <div className="form-group">
                            <label htmlFor="teamName">
                                Team name
                            </label>
                            <input id="teamName" type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input id="password" type="password" value={password} onChange={changePassword} placeholder="Password" required />
                        </div>
                        <Button btnType="primary" type="submit" blockLevel>
                            Login
                        </Button>
                    </Card.Body>
                </Card>
            </form>
        </div>
    );
}
