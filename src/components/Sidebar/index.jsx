import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { nanoid, unwrapResult } from '@reduxjs/toolkit';

import Tree from '../Tree';
import Countdown from '../Countdown';

import { selectTeam } from '../../slices/teamSlice';
import { fetchChallenges } from '../../slices/challengesSlice';
import { getThemeNames, getTheme, themeUpdate } from '../../slices/themeSlice';
import { setJWT } from '../../api';

import './style.scss';

const ThemeSelector = styled.select`
color: ${(props) => props.theme.fgColor};
background-color: ${(props) => props.theme.bgColor};
`;

const ThemeSelectorContainer = styled.div`
    position: fixed;
    bottom: 0rem;
    padding-bottom: 1rem;
    width: 20vw;
    padding-top: 2vh;
    background-color: ${(props) => props.theme.bgColor};
`;

const SidebarDiv = styled.div`
    height: 100vh;
    overflow-y: auto;
    font-size: 1rem;
    padding: 1.5rem;
    padding-bottom: 3rem;
    border-right: 1px solid ${(props) => props.theme.fgColor};
    position:fixed;
    width: 23vw;
`;

export default function Sidebar() {
    const themes = getThemeNames();
    const theme = useSelector(getTheme);
    const team = useSelector(selectTeam);

    const defaultTree = [
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
            text: 'Scoreboard',
            link: '/scoreboard',
        },
    ];

    const [sidebarTree, setSidebarTree] = useState(defaultTree);

    const dispatch = useDispatch();
    const themeSelect = (e) => {
        dispatch(themeUpdate(e.target.value));
    };

    const setChallengeTree = useCallback((challenges) => {
        const challengeTree = {
            text: 'Challenges',
            children: [],
        };

        Object.keys(challenges).forEach((category) => {
            const newCategory = {
                text: category,
                children: [],
            };

            challenges[category].forEach((challenge) => {
                newCategory.children.push({
                    text: challenge.name,
                    link: `/challenge/${challenge.id}`,
                });
            });

            challengeTree.children.push(newCategory);
        });

        setSidebarTree(
            (tree) => tree.filter(
                (item) => !['Login', 'Register'].includes(item.text),
            )
                .concat({
                    text: 'Logout',
                    link: '/logout',
                })
                .concat(challengeTree),
        );
    }, [setSidebarTree]);

    useEffect(() => {
        if (team.loggedIn) setJWT(team.token);
    });

    useEffect(() => {
        const isChallengesInTree = sidebarTree.filter((item) => item.text === 'Challenges').length;
        const showChallenges = team.loggedIn && !isChallengesInTree;
        const hideChallenges = !team.loggedIn && isChallengesInTree;

        if (showChallenges) {
            dispatch(fetchChallenges())
                .then(unwrapResult)
                .then(({ challengeTree }) => setChallengeTree(challengeTree));
        } else if (hideChallenges) {
            setSidebarTree(
                defaultTree,
            );
        }
    }, [
        team,
        dispatch,
        defaultTree,
        sidebarTree,
        setSidebarTree,
        setChallengeTree,
    ]);

    return (
        <SidebarDiv>
            <h2>C7F2020</h2>
            <h5>
                Team:
                {' '}
                {team.name}
            </h5>
            <Countdown date={+new Date('11/01/2020')} />
            <Tree tree={sidebarTree} />
            <ThemeSelectorContainer>
                <label htmlFor="themeSelect" className="mt-2">Theme</label>
                <ThemeSelector value={theme.name} id="themeSelect" onChange={themeSelect} className="ml-2">
                    {themes.map((name) => (<option value={name} key={nanoid()}>{name}</option>))}
                </ThemeSelector>
            </ThemeSelectorContainer>
        </SidebarDiv>
    );
}
