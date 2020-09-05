import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Card from '../../components/Card';

export default function Challenge() {
    const { id } = useParams();
    const history = useHistory();

    if (!id) {
        return history.push('/');
    }

    return (
        <Card>
            <Card.Header>
                Challenge Name
            </Card.Header>
            <Card.Body>
                Challenge Description
            </Card.Body>
        </Card>
    );
}
