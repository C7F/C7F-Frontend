import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';

import {
    validateEmail,
    validateTeamName,
    validatePassword,
} from '../../utils/validation';
import { requestRegister } from '../../api/auth';

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

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await requestRegister({ email, name: teamName, password })) {
            history.push('/login');
        } else {
            setError('Registration failed!');
        }
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
            <form onSubmit={handleSubmit}>
                <Card className="register-card m-auto">
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Error>{error}</Error>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input id="email" type="email" value={email} onChange={changeEmail} placeholder="Enter email" required />
                            <small className="text-muted">
                                You will receive a verification email.
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="registerEmail">Team name</label>
                            <input id="registerEmail" type="text" value={teamName} onChange={changeTeamName} placeholder="Enter team name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="registerPassword">Password</label>
                            <input id="registerPassword" type="password" value={password} onChange={changePassword} placeholder="Password" required />
                        </div>

                        <Button btnType="primary" type="submit" blockLevel>
                            Register
                        </Button>
                    </Card.Body>
                </Card>
            </form>
        </div>
    );
}
