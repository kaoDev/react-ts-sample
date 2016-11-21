import * as React from 'react'
import renderer from 'react-test-renderer'
import { MarkdownText } from '../../components/MarkdownText'

test('Link changes the class when hovered', () => {
    const textValue = 'text'

    const onChange = () => {

    }

    const component = renderer.create(
        <MarkdownText text={'# headline'} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})