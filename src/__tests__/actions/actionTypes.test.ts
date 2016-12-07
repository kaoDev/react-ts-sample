import * as actionTypes from 'actions/actionTypes';

test('every action type should have the own name as string value', () => {

    const allActions = actionTypes as any;

    for (const type in actionTypes) {
        expect(allActions[type]).toBeDefined();
        expect(type).toEqual(allActions[type] as string);
    }
});
