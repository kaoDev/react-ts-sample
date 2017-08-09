import * as React from 'react'
import { PureComponent } from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { ApplicationState } from 'models/applicationState'
import { Action } from 'actions/actionTypes'
import { inputChanged } from 'actions/actionCreators'
import { MarkdownText } from 'components/MarkdownText'
import { TextArea } from 'components/TextArea'
import { Card } from 'components/Card'
import glamorous from 'glamorous'

type IAppProps = {
  text: string
  inputChanged: (input: string) => Action
}

const mapDispatchToProps = {
  inputChanged,
}

const mapStateToProps: MapStateToProps<{ text: string }, {}> = (
  state: ApplicationState
) => {
  return {
    text: state.text,
  }
}

const Column = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  height: '600px',
  width: '100%',
})

const EditorWrapper = glamorous.div({
  display: 'flex',
  height: '100%',
  flexGrow: 1,
  justifyContent: 'space-around',
})

const PaperCard = glamorous(Card)({
  height: '100%',
  margin: '10px',
  padding: '8px',
  width: 'calc(50% - 10px)',
  maxWidth: '800px',
  boxSizing: 'border-box',
})

export class AppComponent extends PureComponent<IAppProps, {}> {
  onValueChanged = (value: string) => {
    const { inputChanged } = this.props
    inputChanged(value)
  }

  render() {
    const { text } = this.props

    return (
      <Column>
        <EditorWrapper>
          <PaperCard level={2}>
            <TextArea onChange={this.onValueChanged} value={text} />
          </PaperCard>
          <PaperCard level={2}>
            <MarkdownText text={text} />
          </PaperCard>
        </EditorWrapper>
      </Column>
    )
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
