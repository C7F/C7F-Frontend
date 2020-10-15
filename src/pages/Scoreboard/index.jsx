import React from 'react';

import { Heading1 } from '../../components/Heading';
import ScoreboardTable from '../../components/ScoreboardTable';

export default function Scoreboard() {
    return (
        <div>
            <Heading1 type="error">Scoreboard</Heading1>
            <div>The fancy graphs go here</div>
            <ScoreboardTable />
        </div>
    );
}
