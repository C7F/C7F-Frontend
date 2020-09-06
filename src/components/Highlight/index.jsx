/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import hljs from 'highlight.js';
import markdown from 'highlight.js/lib/languages/markdown';
import { useSelector } from 'react-redux';
import { getTheme } from '../../slices/themeSlice';

hljs.registerLanguage('markdown', markdown);

const CodeWrapper = styled.pre`
    background-color: inherit !important;
    font-size: 1.1rem;
`;

export default function Highlight() {
    const codeNode = React.createRef();
    const theme = useSelector(getTheme);
    const highlight = () => {
        if (codeNode && codeNode.current && hljs.highlightBlock(codeNode.current));
    };

    useEffect(() => {
        highlight(codeNode);
    });

    require(`highlight.js/styles/${theme.name}.css`);

    return (
        <>
            <CodeWrapper>
                <code ref={codeNode} className="markdown">
                    {`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`}
                </code>
            </CodeWrapper>
        </>
    );
}
