import React from 'react';

import Tree from '../Tree';
import Countdown from '../Countdown';

import './style.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>C7F2020</h2>
            <Countdown date="10/1/2020" />
            <Tree tree={[
                {
                    text: 'Home',
                    link: '/',
                }, {
                    text: 'Login',
                    link: '/login',
                }, {
                    text: 'Register',
                    link: '/register',
                }, {
                    text: 'Challenges',
                    children: [
                        {
                            text: 'Pwn',
                            children: [
                                {
                                    text: 'pwn-intended-0x1',
                                    link: '/challenge/pwn/1',
                                },
                                {
                                    text: 'pwn-intended-0x2',
                                    link: '/challenge/pwn/2',
                                },
                                {
                                    text: 'pwn-intended-0x3',
                                    link: '/challenge/pwn/3',
                                },
                            ],
                        },
                        {
                            text: 'Web',
                            children: [
                                {
                                    text: 'Oreo',
                                    link: '/challenge/web/1',
                                },
                                {
                                    text: 'File-Library',
                                    link: '/challenge/web/2',
                                },
                                {
                                    text: 'Cascade',
                                    link: '/challenge/web/',
                                },
                            ],
                        },
                    ],
                }]}
            />
        </div>
    );
}
