import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Card from '../../components/Card';
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
        <div className="mt-5 challenge-container">
            <Card className="challenge-card m-auto">
                <Card.Header>
                    Challenge Name
                </Card.Header>
                <Card.Body>
                    Challenge Description
                    <Highlight />
                </Card.Body>
            </Card>
        </div>
    );
}
