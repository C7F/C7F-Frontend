import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Typist from 'react-typist';

import './style.scss';

const CardHeader = styled.header`
    font-size: 1.3rem;
    background-color: ${(props) => props.theme.dark} !important;
`;

function Header(props) {
    const { children, className } = props;
    return (
        <CardHeader className={`${className}`}>
            <Typist avgTypingDelay={150} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}>
                {children}
            </Typist>
        </CardHeader>
    );
}

function Body(props) {
    const { children, className } = props;
    return (
        <div className={className}>{children}</div>
    );
}

function CustomCard(props) {
    const { children, className } = props;
    return (
        <div className={`terminal-card ${className}`}>{children}</div>
    );
}

const propType = {
    children: propTypes.node,
    className: propTypes.string,
};

const defaultProps = {
    children: <></>,
    className: '',
};

Header.propTypes = propType;
Body.propTypes = propType;
CustomCard.propTypes = propType;

Header.defaultProps = defaultProps;
Body.defaultProps = defaultProps;
CustomCard.defaultProps = defaultProps;

CustomCard.Body = Body;
CustomCard.Header = Header;

export default CustomCard;
