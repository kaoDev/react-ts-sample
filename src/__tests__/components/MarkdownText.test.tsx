import * as React from 'react';
import renderer from 'react-test-renderer';
import { MarkdownText } from 'components/MarkdownText';

describe('MarkdownText shall render text', () => {

    const textValue = '# headline\ntext';

    const component = renderer.create(
        <MarkdownText text={textValue} />
    );
    let tree = component.toJSON();

    test('Snapshot test', () => {
        expect(tree).toMatchSnapshot();
    });
});