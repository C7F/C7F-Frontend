import React, { useState, useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';

import { nameUpdate } from '../../slices/teamSlice';

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

    useEffect(() => {
        if (validateTeamName(teamName, setError) && validatePassword(password, setError));
    }, [teamName, password]);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(nameUpdate(teamName));
    };

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
                        <Button btnType="primary" blockLevel>
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
            </form>
        </div>
    );
}
