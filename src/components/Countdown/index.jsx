import React, { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import propTypes from 'prop-types';

export default function Countdown({ date }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={nanoid()}>
                {timeLeft[interval]}
                {interval[0]}
                {' '}
            </span>,
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>It is time!</span>}
        </div>
    );
}

Countdown.propTypes = {
    date: propTypes.number.isRequired,
};
