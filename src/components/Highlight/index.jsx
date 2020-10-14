import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const CodeWrapper = styled.pre`
    background-color: inherit !important;
    font-size: 1rem;
`;

const MarkdownHeading = styled.h1`
    color: ${(props) => props.theme.error};
`;

const MarkdownText = styled.p`
    color: ${(props) => props.theme.fgColor};
`;

export default function Highlight(props) {
    const { children } = props;

    return (
        <>
            <CodeWrapper>
                <ReactMarkdown
                    source={children}
                    renderers={{
                        heading: ({ children: child }) => (
                            <MarkdownHeading>{child}</MarkdownHeading>
                        ),
                        paragraph: ({ children: child }) => (
                            <MarkdownText>{child}</MarkdownText>
                        ),
                    }}
                />
            </CodeWrapper>
        </>
    );
}

Highlight.propTypes = {
    children: propTypes.string.isRequired,
};
