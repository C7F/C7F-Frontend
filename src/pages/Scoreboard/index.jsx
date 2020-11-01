import React, { useRef, useEffect, useState } from 'react';

import { Heading1 } from '../../components/Heading';
import ScoreboardPlot from '../../components/ScoreboardPlot';
import ScoreboardTable from '../../components/ScoreboardTable';

export default function Scoreboard() {
    const ref = useRef(null);
    const [width, setWidth] = useState(1000);

    useEffect(() => {
        setWidth(ref.current ? ref.current.offsetWidth / 1.5 : 1000);
    }, [setWidth]);

    return (
        <div ref={ref}>
            <Heading1 type="error">Scoreboard</Heading1>
            <ScoreboardPlot width={width} />
            <ScoreboardTable />
        </div>
    );
}
