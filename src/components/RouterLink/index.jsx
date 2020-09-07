import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

const LinkText = styled.span`
    color: ${(props) => props.theme.primary};
    &:hover {
        background-color: ${(props) => props.theme.dark};
        color: white;
    }
`;

function RouterLink(props) {
    const { to, children } = props;
    return (
        <Link to={to}>
            <LinkText>
                {children}
            </LinkText>
        </Link>
    );
}

RouterLink.propTypes = {
    to: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};
export default RouterLink;
