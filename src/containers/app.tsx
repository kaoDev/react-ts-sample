import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Store, compose, Dispatch } from 'redux'
import { ApplicationState } from 'models/applicationState'
import { inputChanged } from 'actions/actionCreators'
import { MarkdownText } from 'components/MarkdownText'
import { TextArea } from 'components/TextArea'
import { Action } from 'redux-actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

interface IAppProps {
    text: string
    dispatch?: Dispatch<Store<ApplicationState>>
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        text: state.text
    }
}

class AppComponent extends Component<IAppProps, {}> {

    private onValueChanged = (value: string) => {
        const {dispatch} = this.props
        if (dispatch) {
            dispatch(inputChanged(value))
        }
    }

    render() {
        const {text} = this.props

        const columnStyle: React.CSSProperties = {
            display: 'flex',
            flexDirection: 'column',
            height: '600px',
            width: '100%'
        }

        const editorWrapperStyle: React.CSSProperties = {
            display: 'flex',
            height: '100%',
            flexGrow: 1,
            justifyContent: 'space-around'
        }

        const paperStyle: React.CSSProperties = {
            height: '100%',
            margin: '10px',
            padding: '8px',
            width: 'calc(50% - 10px)',
            maxWidth: '800px',
            boxSizing: 'border-box',
        }

        return (
            <MuiThemeProvider>
                <div style={columnStyle} >
                    <div style={editorWrapperStyle}>
                        <Paper style={paperStyle}>
                            <TextArea rows={23} rowsMax={23} onChange={this.onValueChanged} value={text} />
                        </Paper>
                        <Paper style={paperStyle}>
                            <MarkdownText text={text} />
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export const App = connect(mapStateToProps)(AppComponent)