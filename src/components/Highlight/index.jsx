/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import hljs from 'highlight.js';
import markdown from 'highlight.js/lib/languages/markdown';
import { useSelector } from 'react-redux';

import { getTheme } from '../../slices/themeSlice';

hljs.registerLanguage('markdown', markdown);

const CodeWrapper = styled.pre`
    background-color: inherit !important;
    font-size: 1rem;
`;

export default function Highlight(props) {
    const { children } = props;

    const codeNode = React.createRef();
    const theme = useSelector(getTheme);
    const highlight = () => {
        if (codeNode && codeNode.current && hljs.highlightBlock(codeNode.current));
    };

    useEffect(() => {
        require(`highlight.js/styles/${theme.name}.css`);
        highlight(codeNode);
    });

    return (
        <>
            <CodeWrapper>
                <code ref={codeNode} className="markdown">
                    {children}
                </code>
            </CodeWrapper>
        </>
    );
}

Highlight.propTypes = {
    children: propTypes.string.isRequired,
};
