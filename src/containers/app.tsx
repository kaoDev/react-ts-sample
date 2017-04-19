import * as React from 'react';
import { PureComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ApplicationState } from 'models/applicationState';
import { inputChanged } from 'actions/actionCreators';
import { MarkdownText } from 'components/MarkdownText';
import { TextArea } from 'components/TextArea';
import { Card } from 'react-toolbox/lib/Card';

interface IAppProps {
    text: string;
    inputChanged: typeof inputChanged;
}

const mapDispatchToProps = {
    inputChanged
};

const mapStateToProps: MapStateToProps<{ text: string }, {}> = (state: ApplicationState) => {
    return {
        text: state.text
    };
};

class AppComponent extends PureComponent<IAppProps, {}> {

    private onValueChanged = (value: string) => {
        const { inputChanged } = this.props;
        if (inputChanged) {
            inputChanged(value);
        }
    }

    render() {
        const { text } = this.props;

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
                        <TextArea rows={27} onChange={this.onValueChanged} value={text} />
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