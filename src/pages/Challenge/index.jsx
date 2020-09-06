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

    const sampleChallenge = `# Oreo

My nephew is a fussy eater and is only willing to eat chocolate oreo. Any other flavour and he throws a tantrum.

Challenge: [Oreo](http://chall.csivit.com:30243)
`;

    return (
        <div className="challenge-container mt-2">
            <Highlight>
                {sampleChallenge}
            </Highlight>
        </div>
    );
}
