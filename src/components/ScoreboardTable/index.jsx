import React from 'react';
import styled from 'styled-components';

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
                <tr>
                    <CustomTd>
                        1.
                    </CustomTd>
                    <CustomTd>
                        Some really big team name here
                    </CustomTd>
                    <CustomTd>
                        27000
                    </CustomTd>
                    <CustomTd>
                        Replublic of China
                    </CustomTd>
                </tr>
            </tbody>
        </CustomTable>
    );
}
