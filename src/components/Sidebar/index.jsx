import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Countdown from '../Countdown';

import './style.scss';

export default function Sidebar() {
    return (
        <div>
            <Nav
                className="d-md-block bg-transparent sidebar"
            >
                <Nav.Link href="/">
                    <Navbar.Brand className="text-light">C7F</Navbar.Brand>
                </Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/" className="text-light">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login" className="text-light">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register" className="text-light">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/challenge/1" className="text-light">Challenges</Nav.Link>
                </Nav.Item>
                <Countdown date={+new Date('10/1/2020')} />
            </Nav>
        </div>
    );
}
