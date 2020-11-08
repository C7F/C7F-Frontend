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
    const scoreboard = useSelector(selectScoreboard);

    const getDataForTeam = (team) => {
        const x = team.submissions.map(({ timestamp }) => timestamp);
        const y = [];
        let sum = 0;

        for (let i = 0; i < x.length; i += 1) {
            sum += team.submissions[i].points;
            y.push(sum);
        }

        return {
            x,
            y,
            name: team.team,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: getRandomColor() },
        };
    };

    const data = scoreboard.slice(0, 10).map((team) => getDataForTeam(team));

    const generateButtons = () => [{
        method: 'restyle',
        args: [data],
        label: '1-10',
    }, {
        method: 'restyle',
        args: [scoreboard.slice(11, 20).map((team) => getDataForTeam(team))],
        label: '11-20',
    },
    {
        method: 'restyle',
        args: [scoreboard.slice(21, 30).map((team) => getDataForTeam(team))],
        label: '21-30',
    },
    {
        method: 'restyle',
        args: [scoreboard.slice(31, 40).map((team) => getDataForTeam(team))],
        label: '31-40',
    },
    {
        method: 'restyle',
        args: [scoreboard.slice(41, 50).map((team) => getDataForTeam(team))],
        label: '41-50',
    }];

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
                autosize: true,
                updatemenus:
                    [
                        {
                            y: 1,
                            yanchor: 'top',
                            buttons: generateButtons(),
                        },
                    ],
            }}
            useResizeHandler
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
