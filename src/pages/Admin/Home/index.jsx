import React from 'react';

import { Heading1 } from '../../../components/Heading';
import CategoryPieChart from '../../../components/CategoryPieChart';
import ChallengeSolvePlot from '../../../components/ChallengeSolvePlot';

export default function Home() {
    return (
        <div>
            <Heading1 type="error">Admin Panel</Heading1>
            <ChallengeSolvePlot />
            <CategoryPieChart />
        </div>
    );
}
