import React from 'react';
import propTypes from 'prop-types';

import './style.scss';

function Header(props) {
    const { children, className } = props;
    return (
        <header className={className}>{children}</header>
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
