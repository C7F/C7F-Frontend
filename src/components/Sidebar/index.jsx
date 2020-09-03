import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.css';

export default function Sidebar() {
    return (
        <Nav
            className="d-md-block bg-dark sidebar"
        >
            <Nav.Link href="/">
                <Navbar.Brand>C7F</Navbar.Brand>
            </Nav.Link>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/challenges">Challenges</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
