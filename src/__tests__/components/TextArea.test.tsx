import * as React from 'react';
import renderer from 'react-test-renderer';
import { TextArea } from 'components/TextArea';

jest.mock('react-toolbox/lib/input/Input', () => { return { inputFactory: () => 'Input' }; });

describe('TextArea shall render text', () => {

    const textValue = '# headline\ntext';
    const onChange = jest.fn();
    const component = renderer.create(<TextArea value={textValue} onChange={onChange} />);
    let tree = component.toJSON();

    test('Snapshot test', () => {
        expect(tree).toMatchSnapshot();
    });

    test('props value should be textValue', () => {
        expect(component.getInstance().props.value).toBe(textValue);
    });

    test('props value should be in component state', () => {
        const textArea = component.getInstance() as any as TextArea;

        expect(textArea.state.value).toEqual(textValue);
    });

    test('state should update on props update', () => {
        const textArea = component.getInstance() as any as TextArea;
        textArea.componentWillReceiveProps({ value: 'next text', onChange: onChange });

        expect(textArea.state.value).toEqual('next text');
    });
});