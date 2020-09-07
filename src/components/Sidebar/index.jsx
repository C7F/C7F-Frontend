import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

import Tree from '../Tree';
import Countdown from '../Countdown';
import './style.scss';
import { getThemeNames, getTheme, themeUpdate } from '../../slices/themeSlice';

const ThemeSelector = styled.select`
    color: ${(props) => props.theme.fgColor};
    background-color: ${(props) => props.theme.bgColor};
`;

const SidebarDiv = styled.div`
    height: 100vh;
    overflow-y: auto;
    font-size: 1rem;
    padding: 1.5rem;
    border-right: 1px solid ${(props) => props.theme.fgColor};
    position:fixed;
    width: 23vw;
`;

export default function Sidebar() {
    const themes = getThemeNames();
    const theme = useSelector(getTheme);

    const dispatch = useDispatch();
    const themeSelect = (e) => {
        dispatch(themeUpdate(e.target.value));
    };
    return (
        <SidebarDiv>
            <h2>C7F2020</h2>
            <Countdown date={+new Date('9/10/2020')} />
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
            <div className="themeSelector">
                <label htmlFor="themeSelect" className="mt-2">Theme</label>
                <ThemeSelector value={theme.name} id="themeSelect" onChange={themeSelect} className="ml-2">
                    {themes.map((name) => (<option value={name} key={nanoid()}>{name}</option>))}
                </ThemeSelector>
            </div>
        </SidebarDiv>
    );
}
