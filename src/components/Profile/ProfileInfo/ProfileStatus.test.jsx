import React from 'react'
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

// тестируемый компонент
describe('ProfileStatus component', () => {
    // первый тест
    test('status from props should be in the state', () => {
        // создать компонент
        const component = create(<ProfileStatus status={'it-kamasutra.com'}/>)
        // получить экземпляр компоненты
        const instance = component.getInstance();
        // тест
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
    test('callback should be called', () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactiveEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus/>)
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span).not.toBeNull();
    });
    test("after creation span shouldn't be displayed", () => {
        const component = create(<ProfileStatus/>)
        const instance = component.root;
        expect(() => {
            let input = instance.findByType('input');
        }).toThrow();
    });
    test('after creation span should contains correct status', () => {
       const component = create(<ProfileStatus status={'it-kamasutra.com'} />);
       const instance = component.root;
       let span = instance.findByType('span');
       expect(span.children[0]).toBe('it-kamasutra.com')
    });
    test('input should be displayed in editMode instead os span', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} />);
        const instance = component.root;
        let span = instance.findByType('span');
        span.props.onDoubleClick();
        let input = instance.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com')
    });
});

