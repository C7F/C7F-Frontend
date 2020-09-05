import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';

import {
    validateEmail,
    validateTeamName,
    validatePassword,
} from '../../utils/validation';

import './style.scss';

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
        if (
            validateEmail(email, setError)
            && validateTeamName(teamName, setError)
            && validatePassword(password, setError)
        );
    }, [teamName, email, password]);

    return (
        <div className="mt-5 register-container">
            <form>
                <Card className="register-card m-auto">
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Error>{error}</Error>
                        <div className="form-group" controlId="teamEmail">
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" value={email} onChange={changeEmail} placeholder="Enter email" required />
                            <small className="text-muted">
                                You will receive a verification email.
                            </small>
                        </div>

                        <div className="form-group" controlId="teamUsername">
                            <label htmlFor="email">Team name</label>
                            <input id="email" type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" required />
                        </div>

                        <div className="form-group" controlId="teamPassword">
                            <label htmlFor="email">Password</label>
                            <input id="email" type="password" value={password} onChange={changePassword} placeholder="Password" required />
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
