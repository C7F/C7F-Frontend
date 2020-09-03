import React from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';
import './style.css';
import Card from '../../components/Card';

export default function Login() {
    return (
        <div className="mt-5 register-container">
            <Form>
                <Card className="login-card m-auto">
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
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
