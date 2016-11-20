import * as marked from 'marked'
import * as React from 'react'
import { Component, CSSProperties } from 'react'

interface MarkdownTextProps {
    readonly text: string
    style?: CSSProperties
}

marked.setOptions({
    gfm: true,
    sanitize: false
})

export class MarkdownText extends Component<MarkdownTextProps, {}> {

    render() {
        const parsedMarkdown = marked.parse(this.props.text || '');

        const mergedStyle: React.CSSProperties = Object.assign({
            color: 'black'
        }, this.props.style);

        return (
            <div style={mergedStyle} dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
        );
    }
}