import React from 'react';

import Tree from '../Tree';

import './style.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>C7F2020</h2>
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
                    link: '/challenge',
                    children: [
                        {
                            text: 'Pwn',
                            link: '/challenge/pwn',
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
                            link: '/challenge/web',
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
