import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { getTheme } from '../../slices/themeSlice';
import { selectScoreboard } from '../../slices/scoreboardSlice';

import getRandomColor from '../../utils/getRandomColor';

import './style.scss';

export default function ScoreboardPlot(props) {
    const { width, height } = props;

    const theme = useSelector(getTheme);
    const scoreboard = useSelector(selectScoreboard)
        .filter((_team, index) => index < 10);

    const getDataForTeam = (team) => ({
        x: team.submissions.map(({ timestamp }) => timestamp),
        y: team.submissions.map(({ points }) => points),
        name: team.team,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: getRandomColor() },
    });

    const data = scoreboard.map((team) => getDataForTeam(team));

    return (
        <Plot
            className="plot"
            data={data}
            layout={{
                width,
                height,
                title: 'Top 10 teams',
                paper_bgcolor: theme.bgColor,
                plot_bgcolor: theme.bgColor,
                font: {
                    color: theme.fgColor,
                },
                xaxis: {
                    gridcolor: theme.primary,
                },
                yaxis: {
                    gridcolor: theme.primary,
                },
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
