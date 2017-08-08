import * as React from 'react'
import { PureComponent, CSSProperties } from 'react'
import glamorous from 'glamorous'

const MaterialTextArea = glamorous.textarea({
  maxHeight: '100%',
  height: '100%',
  width: '100%',
  fontFamily: 'Inconsolata, monospace',
  overflow: 'auto',
  lineHeight: '20px',
  display: 'block',
  border: 0,
  padding: '10px 5px',
  background: 'white no-repeat',
  boxSizing: 'border-box',
  backgroundImage:
    'linear-gradient(to bottom, #1abc9c, #1abc9c), linear-gradient(to bottom, silver, silver)',
  backgroundSize: '0 2px, 100% 1px',
  backgroundPosition: '50% 100%, 50% 100%',
  transition: 'background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1)',
  ':focus': {
    backgroundSize: '100% 2px, 100% 1px',
    outline: 'none',
  },
})

export interface TextAreaProps {
  onChange: (newValue: string) => void
  disabled?: boolean
  name?: string
  value?: string
  style?: React.CSSProperties
}

interface TextAreaState {
  value: string
}

export class TextArea extends PureComponent<TextAreaProps, TextAreaState> {
  state = {
    value: this.props.value || '',
  }

  componentWillReceiveProps(nextProps: TextAreaProps) {
    const { value } = nextProps
    this.setState({ value: value || '' })
  }

  private changeHandler: React.FormEventHandler<HTMLTextAreaElement> = ({
    currentTarget: { value },
  }) => {
    this.setState({ value })
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    const { onChange, value: propValue, ...props } = this.props
    const { value } = this.state

    return (
      <MaterialTextArea
        {...props}
        value={value}
        onChange={this.changeHandler}
      />
    )
  }
}
