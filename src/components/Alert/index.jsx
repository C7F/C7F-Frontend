import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import './style.scss';
import { selectAlerts, removeAlert } from '../../slices/alertsSlice';

const CustomAlert = styled.div`
    font-size: 1rem;
    background-color: ${(props) => props.theme[props.alertType]}44;
    height: 3rem;
    width: 15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2vh;
`;

export default function Alert() {
    const alerts = useSelector(selectAlerts);
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeAlert(id));
    };

    return (
        <CSSTransitionGroup
            component="div"
            className="alert-container"
            transitionName="fade-alerts"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}
        >
            {alerts.map((alert) => (
                <CustomAlert
                    key={alert.id}
                    alertType={alert.type}
                    onClick={() => remove(alert.id)}
                >
                    {alert.message}
                </CustomAlert>
            ))}
        </CSSTransitionGroup>
    );
}
