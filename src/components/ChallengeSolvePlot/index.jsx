import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

import { getTheme } from '../../slices/themeSlice';
import { selectChallengeArray } from '../../slices/challengesSlice';

import getRandomColor from '../../utils/getRandomColor';

export default function ChallengeSolvePlot() {
    const theme = useSelector(getTheme);
    const challenges = useSelector(selectChallengeArray);

    const x = challenges.map((challenge) => challenge.name);

    // Replace with solves for challenge
    const y = challenges.map((challenge) => challenge.points);

    return (
        <Plot
            className="plot"
            data={[
                {
                    type: 'bar',
                    x,
                    y,
                    marker: {
                        color: challenges.map(() => getRandomColor()),
                    },
                },
            ]}
            layout={{
                width: 1000,
                height: 500,
                title: 'Challenges vs Solves',
                paper_bgcolor: theme.bgColor,
                plot_bgcolor: theme.bgColor,
                font: {
                    color: theme.fgColor,
                },
                yaxis: {
                    gridcolor: theme.primary,
                },
            }}
        />
    );
}
