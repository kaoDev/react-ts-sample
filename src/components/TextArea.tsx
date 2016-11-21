import * as React from 'react'
import { Component, CSSProperties } from 'react'
import TextField from 'material-ui/TextField'

export interface TextAreaProps {
    lineHeight?: string
    onChange: (newValue: string) => void
    disabled?: boolean
    name?: string
    id?: string
    value?: string
    style?: React.CSSProperties
    rows?: number
    rowsMax?: number
}

interface TextAreaState {
    value: string
}

export class TextArea extends Component<TextAreaProps, TextAreaState> {

    state = {
        value: this.props.value || ''
    }

    componentWillReceiveProps = (nextProps: TextAreaProps) => {
        const {value} = nextProps
        this.setState({ value: value || '' })
    }

    private changeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const value = (event.target as HTMLTextAreaElement).value
        this.setState({ value })
        const {onChange} = this.props
        onChange(value)
    }

    static style: CSSProperties = {
        maxHeight: '100%',
        overflow: 'auto'
    }

    render() {
        const {disabled, name, id, style, lineHeight, rows, rowsMax} = this.props
        const {value} = this.state
        const mergedStyle: CSSProperties = Object.assign({}, TextArea.style, style)

        const textAreaStyle: CSSProperties = {
            maxHeight: '100%',
            overflow: 'auto'
        }

        return (
            <TextField
                style={mergedStyle}
                inputStyle={textAreaStyle}
                multiLine={true}
                disabled={disabled}
                value={value}
                name={name}
                id={id}
                onChange={this.changeHandler}
                fullWidth={true}
                rows={rows}
                rowsMax={rowsMax}
                />
        )
    }
}