import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { Input } from 'react-toolbox/lib/input';

export interface TextAreaProps {
    onChange: (newValue: string) => void;
    disabled?: boolean;
    name?: string;
    value?: string;
    style?: React.CSSProperties;
}

interface TextAreaState {
    value: string;
}

export class TextArea extends Component<TextAreaProps, TextAreaState> {

    state = {
        value: this.props.value || ''
    };

    componentWillReceiveProps = (nextProps: TextAreaProps) => {
        const {value} = nextProps;
        this.setState({ value: value || '' });
    }

    private changeHandler = (value: string) => {
        this.setState({ value });
        const {onChange} = this.props;
        onChange(value);
    }

    static style: CSSProperties = {
        maxHeight: '100%',
        height: '100%',
        overflow: 'auto'
    };

    render() {
        const {disabled, name, style} = this.props;
        const {value} = this.state;
        const mergedStyle: CSSProperties = Object.assign({}, TextArea.style, style);

        return (
            <Input
                type={'text'}
                style={mergedStyle}
                multiline={true}
                disabled={disabled}
                value={value}
                name={name}
                onChange={this.changeHandler}
                />
        );
    }
}