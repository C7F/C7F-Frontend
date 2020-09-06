import React, { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import markdown from 'highlight.js/lib/languages/markdown';

hljs.registerLanguage('markdown', markdown);

export default function Highlight() {
    const codeNode = React.createRef();

    const highlight = () => {
        if (codeNode && codeNode.current && hljs.highlightBlock(codeNode.current));
    };

    useEffect(() => {
        highlight(codeNode);
    });

    return (
        <pre className="common markup">
            <code ref={codeNode} className="markdown">
                **Hello**
                _yay it works_
                # Hello world
            </code>
        </pre>
    );
}
