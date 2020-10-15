import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { selectScoreboard } from '../../slices/scoreboardSlice';
import { getTheme } from '../../slices/themeSlice';

import './style.scss';

export default function ScoreboardPlot(props) {
    const { width, height } = props;

    const theme = useSelector(getTheme);
    const scoreboard = useSelector(selectScoreboard).filter((_team, index) => index < 10);

    const x = scoreboard.map(({ team }) => team);
    const y = scoreboard.map(({ points }) => points);

    return (
        <Plot
            className="plot"
            data={[
                {
                    x,
                    y,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: theme.fgColor },
                },
            ]}
            layout={{
                width,
                height,
                title: 'Top 10 teams',
            }}
        />
    );
}

ScoreboardPlot.propTypes = {
    width: propTypes.number.isRequired,
    height: propTypes.oneOfType([propTypes.number, propTypes.string]),
};

ScoreboardPlot.defaultProps = {
    height: '',
};
