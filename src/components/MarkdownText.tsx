import * as marked from 'marked'
import * as React from 'react'
import { CSSProperties } from 'react'
import glamorous from 'glamorous'
import { rgba } from 'rgba-string'

type MarkdownTextProps = {
  readonly text: string
  readonly style?: CSSProperties
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
    <TextDiv {...props} dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
  )
}
