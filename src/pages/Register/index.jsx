import React from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';

import Card from '../../components/Card';

import './style.css';

export default function Register() {
    return (
        <div className="mt-5 register-container">
            <Form>
                <Card className="register-card m-auto">
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Form.Group controlId="teamEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                You will receive a verification email.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="teamUsername">
                            <Form.Label>Team name</Form.Label>
                            <Form.Control type="text" placeholder="Enter team name" />
                        </Form.Group>

                        <Form.Group controlId="teamPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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
