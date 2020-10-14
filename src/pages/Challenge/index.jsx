import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { selectChallengeArray, submitFlag } from '../../slices/challengesSlice';

import Highlight from '../../components/Highlight';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.scss';

export default function Challenge() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const challenges = useSelector(selectChallengeArray);
    const [currentChallenge, setCurrentChallenge] = useState('');

    const [flag, setFlag] = useState('');

    const changeFlag = ({ target }) => {
        setFlag(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitFlag({ flag }))
            .then(unwrapResult)
            .then(console.log);
    };

    const makeChallenge = useCallback(() => {
        const currentChall = challenges.find((challenge) => challenge.id === id);

        if (!currentChall) {
            return `# Challenge not found!

Challenge does not exist. Please visit a valid URL.`;
        }

        return `# ${currentChall.name}

**Points: ${currentChall.points}**

${currentChall.description}
`;
    }, [challenges, id]);

    useEffect(() => {
        if (!id) {
            history.push('/');
        }

        setCurrentChallenge(makeChallenge());
    }, [setCurrentChallenge, makeChallenge, history, id]);

    /*
    const sampleChallenge = `# Oreo

My nephew is a fussy eater and is only willing to eat chocolate oreo.
Any other flavour and he throws a tantrum.

Challenge: [Oreo](http://chall.csivit.com:30243)
`;
    */

    return (
        <div className="challenge-container mt-2">
            <Highlight>
                {currentChallenge}
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
