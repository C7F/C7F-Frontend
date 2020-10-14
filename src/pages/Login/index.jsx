import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';
import TerminalInput from '../../components/Input';

import './style.scss';

import { nameUpdate, fetchToken, selectTeam } from '../../slices/teamSlice';

import {
    validateTeamName,
    validatePassword,
} from '../../utils/validation';

export default function Login() {
    const { name } = useSelector(selectTeam);
    const [teamName, setTeamName] = useState(name);
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

    const redirectToHome = () => history.push('/');

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(nameUpdate(teamName));
        dispatch(fetchToken({ teamName, password }))
            .then(unwrapResult)
            .then(redirectToHome)
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
                            <TerminalInput id="teamName" type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>
                            <TerminalInput id="password" type="password" value={password} onChange={changePassword} placeholder="Password" required />
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
