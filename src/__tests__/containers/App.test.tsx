import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { App, AppComponent } from 'containers/app'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from 'redux/observable/root'
import { TextArea } from 'components/TextArea'
import { MarkdownText } from 'components/MarkdownText'

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])

describe('App should be rendered', () => {
  const component = renderer.create(
    <Provider store={mockStore()}>
      <App />
    </Provider>
  )
  let tree = component.toJSON()

  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot()
  })
})

describe('test AppComponent', () => {
  const mockFunction = jest.fn()

  const initialValue = 'test'

  const component = renderer.create(
    <AppComponent inputChanged={mockFunction} text={initialValue} />
  )

  const instance = component.getInstance() as AppComponent
  it('onValueChanged should call inputChanged callback', () => {
    const changedText = 'new text'

    instance.onValueChanged(changedText)

    expect(mockFunction).toBeCalledWith(changedText)
  })

  it('AppComponent should have a TextArea with given text value', () => {
    const textArea = component.root.findByType(TextArea)
    expect(textArea.props.value).toEqual(initialValue)
  })
  it('AppComponent should have a MarkdownText with given text', () => {
    const markdown = component.root.findByType(MarkdownText)
    expect(markdown.props.text).toEqual(initialValue)
  })
})
