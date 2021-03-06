import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

import RouterLink from '../RouterLink';

const NodeChildren = styled.div`
    padding-left: 1rem;
`;

const NodeUI = styled.div`
    cursor: pointer;
    user-select: none;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export default function Tree(props) {
    const { tree } = props;
    if (!tree) {
        return (
            <></>
        );
    }
    return tree.map((child) => (
        <Node key={nanoid()} text={child.text} nested={child.children} link={child.link} />
    ));
}

function Node(props) {
    const [childCollapsed, setChildCollapsed] = useState(true);

    const { text, nested, link } = props;

    const toggleState = (e) => {
        e.stopPropagation();
        setChildCollapsed(!childCollapsed);
    };

    const NodeText = link ? <RouterLink to={link}>{text}</RouterLink> : text;

    return (
        <NodeUI key={nanoid()} className="node" onClick={toggleState} onKeyDown={toggleState} role="presentation">
            {(childCollapsed || nested.length === 0) ? '▶' : '▼'}
            {' '}
            {NodeText}
            {nested.length > 0 && !childCollapsed && (
                <NodeChildren className="node-children">
                    <Tree tree={nested} />
                </NodeChildren>
            )}
        </NodeUI>
    );
}

const nodeType = {
    text: propTypes.string.isRequired,
};
nodeType.children = propTypes.arrayOf(propTypes.shape(nodeType));

const propType = {
    tree: propTypes.arrayOf(propTypes.shape(nodeType)),
};

Tree.propTypes = propType;
Node.propTypes = {
    text: propTypes.string.isRequired,
    nested: propTypes.arrayOf(propTypes.shape(nodeType)),
    link: propTypes.string,
};
Node.defaultProps = {
    nested: [],
    link: '',
};
