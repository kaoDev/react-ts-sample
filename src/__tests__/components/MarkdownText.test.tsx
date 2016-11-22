import * as React from 'react'
import renderer from 'react-test-renderer'
import { MarkdownText } from 'components/MarkdownText'

test('MarkdownText renders text', () => {
    const textValue = '# headline\ntext'

    const component = renderer.create(
        <MarkdownText text={textValue} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})