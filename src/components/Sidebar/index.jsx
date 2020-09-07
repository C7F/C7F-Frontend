import React from 'react';

import Tree from '../Tree';

import './style.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
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
