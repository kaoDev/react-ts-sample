import * as marked from 'marked'
import * as React from 'react'
import { CSSProperties } from 'react'
import glamorous from 'glamorous'
import { rgba } from 'rgba-string'

interface MarkdownTextProps {
  readonly text: string
  style?: CSSProperties
}

marked.setOptions({
  gfm: true,
  sanitize: false,
})

const TextDiv = glamorous.div({
  color: rgba(0x1e1e1e),
  fontFamily: 'Lato, sans-serif',
})

export const MarkdownText = (props: MarkdownTextProps) => {
  const parsedMarkdown = marked.parse(props.text || '')

  return (
    <TextDiv
      style={props.style}
      dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
    />
  )
}
