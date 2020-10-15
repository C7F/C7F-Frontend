import React from 'react';
import styled from 'styled-components';

const CustomTable = styled.table`
    border: 1px solid ${(props) => props.theme.primary} !important;
    color: ${(props) => props.theme.fgColor} !important;
    font-size: 1rem;
    text-align: center;
`;

export default function ScoreboardTable() {
    return (
        <CustomTable>
            <thead>
                <tr>
                    <th>
                        Rank
                    </th>
                    <th>
                        Team
                    </th>
                    <th>
                        Points
                    </th>
                    <th>
                        Country
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        1.
                    </td>
                    <td>
                        Some really big team name here
                    </td>
                    <td>
                        27000
                    </td>
                    <td>
                        Replublic of china
                    </td>
                </tr>
            </tbody>
        </CustomTable>
    );
}
