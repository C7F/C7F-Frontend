import React from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

import { getTheme } from '../../slices/themeSlice';

export default function CategoryPieChart() {
    const theme = useSelector(getTheme);

    const values = [15, 25, 15, 10, 35];
    const colors = values.map((item) => (
        theme.primary + Math.round((item * 255) / 35).toString(16).toUpperCase()
    ));

    return (
        <Plot
            className="plot"
            data={[{
                values,
                labels: ['Pwn', 'Web', 'Crypto', 'Misc', 'Forensics'],
                type: 'pie',
                line: {
                    color: theme.primary,
                },
            }]}
            layout={{
                width: 700,
                height: 500,
                title: 'Category-wise distribution',
                paper_bgcolor: theme.bgColor,
                plot_bgcolor: theme.bgColor,
                font: {
                    color: theme.fgColor,
                },
                updatemenus: [{
                    y: 1,
                    yanchor: 'top',
                    buttons: [{
                        method: 'restyle',
                        args: [{
                            type: 'pie',
                            marker: { colors: null },
                        }],
                        label: 'Pie Chart',
                    }, {
                        method: 'restyle',
                        args: [{
                            type: 'bar',
                            marker: { color: colors },
                        }],
                        label: 'Bar Plot',
                    }, {
                        method: 'restyle',
                        args: [{
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: colors },
                        }],
                        label: 'Line Plot',
                    }],
                }],
            }}
        />
    );
}
