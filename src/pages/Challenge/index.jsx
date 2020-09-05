import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Card from '../../components/Card';

import './style.scss';

export default function Challenge() {
    const { id } = useParams();
    const history = useHistory();

    if (!id) {
        return history.push('/');
    }

    return (
        <div className="mt-5 challenge-container">
            <Card className="challenge-card m-auto">
                <Card.Header>
                    Challenge Name
                </Card.Header>
                <Card.Body>
                    Challenge Description
                </Card.Body>
            </Card>
        </div>
    );
}
