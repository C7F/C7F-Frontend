import React from 'react';

import Tree from '../Tree';

import './style.scss';

export default function Sidebar() {
    return (
        <div>
            {/* <Nav
                className="d-md-block bg-dark sidebar"
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
            </Nav> */}
            <Tree tree={[
                {
                    text: 'Home',
                }, {
                    text: 'Login',
                }, {
                    text: 'Register',
                }, {
                    text: 'Challenges',
                    children: [
                        {
                            text: 'Pwn',
                            children: [
                                {
                                    text: 'pwn-intended-0x1',
                                },
                                {
                                    text: 'pwn-intended-0x2',
                                },
                                {
                                    text: 'pwn-intended-0x3',
                                },
                            ],
                        },
                        {
                            text: 'Web',
                            children: [
                                {
                                    text: 'Oreo',
                                },
                                {
                                    text: 'File-Library',
                                },
                                {
                                    text: 'Cascade',
                                },
                            ],
                        },
                    ],
                }]}
            />
        </div>
    );
}
