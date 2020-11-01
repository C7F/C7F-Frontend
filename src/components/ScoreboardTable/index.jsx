import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectScoreboard } from '../../slices/scoreboardSlice';

const CustomTable = styled.table`
    border: 1px solid ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.fgColor} !important;
    font-size: 1rem;
    text-align: center;
`;

const CustomTh = styled.th`
    color: ${(props) => props.theme.primary} !important;
    border: 1px solid ${(props) => props.theme.primary} !important;
    font-size: 1.1rem;
`;

const CustomTd = styled.td`
    border: 1px solid ${(props) => props.theme.primary} !important;
`;

export default function ScoreboardTable() {
    const scoreboard = useSelector(selectScoreboard);

    return (
        <CustomTable>
            <thead>
                <tr>
                    <CustomTh>
                        Rank
                    </CustomTh>
                    <CustomTh>
                        Team
                    </CustomTh>
                    <CustomTh>
                        Points
                    </CustomTh>
                    <CustomTh>
                        Country
                    </CustomTh>
                </tr>
            </thead>
            <tbody>
                {scoreboard.map(({
                    rank,
                    team,
                    points,
                    country,
                }) => (
                    <tr key={rank + team}>
                        <CustomTd>
                            {rank}
                            .
                        </CustomTd>
                        <CustomTd>
                            {team}
                        </CustomTd>
                        <CustomTd>
                            {points}
                        </CustomTd>
                        <CustomTd>
                            {country}
                        </CustomTd>
                    </tr>
                ))}
            </tbody>
        </CustomTable>
    );
}
