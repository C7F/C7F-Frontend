import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-transition-group';

import { selectAlerts } from '../../slices/alertsSlice';

const CustomAlert = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 1rem;
    background-color: ${(props) => props.theme[props.alertType]};
    height: 3rem;
    width: 15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function Alert() {
    const alerts = useSelector(selectAlerts);

    return (
        <div>
            {alerts.map((alert) => (
                <CustomAlert key={alert.id} alertType={alert.type}>
                    {alert.message}
                </CustomAlert>
            ))}
        </div>
    );
}
