import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Highlight from '../../components/Highlight';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.scss';

export default function Challenge() {
    const { id } = useParams();
    const history = useHistory();

    const [flag, setFlag] = useState('');

    const changeFlag = ({ target }) => {
        setFlag(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
            <form onSubmit={handleSubmit} className="flag-form">
                <div className="form-group">
                    <label htmlFor="teamName">
                        Flag
                    </label>
                    <Input id="flag" type="text" value={flag} onChange={changeFlag} placeholder="Enter the flag" required />
                </div>
                <Button type="submit" btnType="primary">Submit</Button>
            </form>
        </div>
    );
}
