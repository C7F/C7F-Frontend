import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { nanoid } from '@reduxjs/toolkit';

const NodeChildren = styled.div`
    padding-left: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

const NodeUI = styled.div`
    cursor: pointer;
`;

export default function Tree(props) {
    const { tree } = props;
    if (!tree) {
        return (
            <></>
        );
    }
    return tree.map((child) => (
        <Node key={nanoid()} text={child.text} nested={child.children} />
    ));
}

function Node(props) {
    const [childCollapsed, setChildCollapsed] = useState(false);

    const { text, nested } = props;

    const toggleState = (e) => {
        e.stopPropagation();
        setChildCollapsed(!childCollapsed);
    };
    return (
        <NodeUI key={nanoid()} className="node" onClick={toggleState} onKeyDown={toggleState} role="presentation">
            &gt;
            {' '}
            {text}
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
};
Node.defaultProps = {
    nested: [],
};
