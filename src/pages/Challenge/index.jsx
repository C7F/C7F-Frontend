import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Highlight from '../../components/Highlight';

import './style.scss';

export default function Challenge() {
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (!id) {
            history.push('/');
        }
    });

    return (
        <div className="challenge-container mt-2">
            <Highlight />
        </div>
    );
}
