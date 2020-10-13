import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const CodeWrapper = styled.pre`
    background-color: inherit !important;
    font-size: 1rem;
`;

export default function Highlight(props) {
    const { children } = props;

    return (
        <>
            <CodeWrapper>
                <ReactMarkdown
                    source={children}
                />
            </CodeWrapper>
        </>
    );
}

Highlight.propTypes = {
    children: propTypes.string.isRequired,
};
