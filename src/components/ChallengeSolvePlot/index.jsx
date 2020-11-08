import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

import { getTheme } from '../../slices/themeSlice';
import { selectChallengeArray } from '../../slices/challengesSlice';

export default function ChallengeSolvePlot() {
    const theme = useSelector(getTheme);
    const challenges = useSelector(selectChallengeArray);

    const x = challenges.map(({ name }) => name);

    // Replace with solves for challenge
    const y = challenges.map(({ points }) => points);

    const yMax = Math.max(...y);
    const colors = y.map((item) => (
        theme.primary + Math.round((item * 255) / yMax).toString(16).toUpperCase()
    ));
    console.log(colors);

    return (
        <Plot
            className="plot"
            data={[
                {
                    type: 'bar',
                    x,
                    y,
                    marker: {
                        color: colors,
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
                updatemenus: [{
                    y: 1,
                    yanchor: 'top',
                    buttons: [{
                        method: 'restyle',
                        args: ['type', 'bar'],
                        label: 'Bar Plot',
                    }, {
                        method: 'restyle',
                        args: [{ type: 'scatter', mode: 'lines+markers' }],
                        label: 'Line Plot',
                    }, {
                        method: 'restyle',
                        args: [{ type: 'scatter', mode: 'markers' }],
                        label: 'Scatter Plot',
                    }],
                }],
                autosize: true,
            }}
            useResizeHandler
        />
    );
}
