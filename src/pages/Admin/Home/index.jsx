import React from 'react';

import { Heading1 } from '../../../components/Heading';
import CategoryPieChart from '../../../components/CategoryPieChart';

export default function Home() {
    return (
        <div>
            <Heading1 type="error">Admin Panel</Heading1>
            <CategoryPieChart />
        </div>
    );
}
