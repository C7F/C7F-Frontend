import React from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

import { getTheme } from '../../slices/themeSlice';

export default function CategoryPieChart() {
    const theme = useSelector(getTheme);

    return (
        <Plot
            className="plot"
            data={[{
                values: [15, 25, 15, 10, 35],
                labels: ['Pwn', 'Web', 'Crypto', 'Misc', 'Forensics'],
                type: 'pie',
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
                        args: [{ type: 'pie' }],
                        label: 'Pie Chart',
                    }, {
                        method: 'restyle',
                        args: ['type', 'bar'],
                        label: 'Bar Plot',
                    }, {
                        method: 'restyle',
                        args: [{ type: 'scatter', mode: 'lines+markers' }],
                        label: 'Line Plot',
                    }],
                }],
            }}
        />
    );
}
