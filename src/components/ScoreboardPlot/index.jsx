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
    const scoreboard = useSelector(selectScoreboard).slice(0, 50);

    const getDataForTeam = (team) => {
        const x = [];
        const y = [];
        let sum = 0;

        for (let i = 0; i < team.submissions.length; i += 1) {
            sum += team.submissions[i].points;
            const timestamp = new Date(team.submissions[i].timestamp);
            x.push(timestamp);
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

    const genVisibilityArray = (start, end) => {
        const visibilityArray = new Array(scoreboard.length);

        for (let i = 0; i < visibilityArray.length; i += 1) {
            visibilityArray[i] = false;
            if (i >= start && i < end) {
                visibilityArray[i] = true;
            }
        }

        return visibilityArray;
    };

    const data = scoreboard.map((team) => getDataForTeam(team));
    const batchSize = 10;

    data.forEach((item, index) => {
        if (index > batchSize) {
            // eslint-disable-next-line no-param-reassign
            item.visible = false;
        }
    });

    const generateButtons = () => {
        const buttons = [];

        for (let i = 0; i < scoreboard.length; i += batchSize) {
            buttons.push({
                method: 'restyle',
                label: `${i + 1}-${i + batchSize}`,
                args: [{
                    visible: genVisibilityArray(i, i + batchSize),
                }],
            });
        }

        return buttons;
    };

    return (
        <Plot
            className="plot"
            data={data}
            layout={{
                width,
                height,
                title: 'Team scores vs Time',
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
                updatemenus: [{
                    y: 1,
                    yanchor: 'top',
                    buttons: generateButtons(),
                }],
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
