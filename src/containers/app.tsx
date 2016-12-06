import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Store, Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from 'models/applicationState';
import { inputChanged } from 'actions/actionCreators';
import { MarkdownText } from 'components/MarkdownText';
import { TextArea } from 'components/TextArea';
import { Card } from 'react-toolbox';
import 'react-toolbox/lib/commons.scss';

interface IAppProps {
    text: string;
    inputChanged: typeof inputChanged;
    dispatch: Dispatch<Store<ApplicationState>>;
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return { inputChanged: bindActionCreators(inputChanged, dispatch) }
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        text: state.text
    };
};

class AppComponent extends Component<IAppProps, {}> {

    private onValueChanged = (value: string) => {
        const {inputChanged} = this.props;
        if (inputChanged) {
            inputChanged(value);
        }
    }

    render() {
        const {text} = this.props;

        const columnStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            height: '600px',
            width: '100%'
        };

        const editorWrapperStyle: React.CSSProperties = {
            display: 'flex',
            height: '100%',
            flexGrow: 1,
            justifyContent: 'space-around'
        };

        const paperStyle: React.CSSProperties = {
            height: '100%',
            margin: '10px',
            padding: '8px',
            width: 'calc(50% - 10px)',
            maxWidth: '800px',
            boxSizing: 'border-box',
        };

        return (
            <div style={columnStyle} >
                <div style={editorWrapperStyle}>
                    <Card style={paperStyle}>
                        <TextArea onChange={this.onValueChanged} value={text} />
                    </Card>
                    <Card style={paperStyle}>
                        <MarkdownText text={text} />
                    </Card>
                </div>
            </div>
        );
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);