import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { TextArea } from 'components/TextArea'

describe('TextArea shall render text', () => {
  const textValue = '# headline\ntext'
  const onChange = jest.fn()
  const component = renderer.create(
    <TextArea value={textValue} onChange={onChange} />
  )
  let tree = component.toJSON()

  test('Snapshot test', () => {
    expect(tree).toMatchSnapshot()
  })

  test('props value should be textValue', () => {
    expect((component.getInstance() as TextArea).props.value).toBe(textValue)
  })

  test('props value should be in component state', () => {
    const textArea = component.getInstance() as TextArea

    expect(textArea.state.value).toEqual(textValue)
  })

  test('state should update on props update', () => {
    const textArea = component.getInstance() as TextArea
    textArea.componentWillReceiveProps({
      value: 'next text',
      onChange: onChange,
    })

    expect(textArea.state.value).toEqual('next text')
  })

  test('state should update on change handler', () => {
    const textArea = component.getInstance() as TextArea
    const nextText = 'new text'

    textArea.changeHandler(
      { currentTarget: { value: nextText } } as React.FormEvent<
        HTMLTextAreaElement
      >
    )

    expect(onChange).toBeCalledWith(nextText)

    expect(textArea.state.value).toEqual(nextText)
  })
})
