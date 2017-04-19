import * as marked from 'marked';
import * as React from 'react';
import { CSSProperties } from 'react';

interface MarkdownTextProps {
    readonly text: string;
    style?: CSSProperties;
}

marked.setOptions({
    gfm: true,
    sanitize: false
});

export function MarkdownText(props: MarkdownTextProps) {
    const parsedMarkdown = marked.parse(props.text || '');

    const mergedStyle: React.CSSProperties = Object.assign({
        color: 'black'
    }, props.style);

    return (
        <div style={mergedStyle} dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
    );
}