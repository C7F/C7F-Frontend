import React from 'react';
import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';

import './style.css';

function Header(props) {
    const { children, className } = props;
    return (
        <Card.Header className={className}>{children}</Card.Header>
    );
}

function Body(props) {
    const { children, className } = props;
    return (
        <Card.Body className={`display-card-body ${className}`}>{children}</Card.Body>
    );
}

function Footer(props) {
    const { children, className } = props;
    return (
        <Card.Footer className={className}>{children}</Card.Footer>
    );
}

function CustomCard(props) {
    const { children, className } = props;
    return (
        <Card className={`display-card ${className}`}>{children}</Card>
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
Footer.propTypes = propType;
CustomCard.propTypes = propType;

Header.defaultProps = defaultProps;
Body.defaultProps = defaultProps;
Footer.defaultProps = defaultProps;
CustomCard.defaultProps = defaultProps;

CustomCard.Body = Body;
CustomCard.Header = Header;
CustomCard.Footer = Footer;

export default CustomCard;
