import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { nanoid } from '@reduxjs/toolkit';

const NodeChildren = styled.div`
    padding-left: 1rem;
`;

export default function Tree(props) {
    const { tree } = props;
    console.log(tree);
    if (!tree) {
        return (
            <></>
        );
    }
    return tree.map((child) => (
        <div key={nanoid()} className="node">
            &gt;
            {child.text}
            <NodeChildren className="node-children">
                <Tree tree={child.children} />
            </NodeChildren>
        </div>
    ));
}

const nodeType = {
    text: propTypes.string.isRequired,
};
nodeType.children = propTypes.arrayOf(propTypes.shape(nodeType));

const propType = {
    tree: propTypes.arrayOf(propTypes.shape(nodeType)),
};

Tree.propTypes = propType;
