import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState ={}) => {
    const store = storeFactory(initialState)
    return shallow(<Input store={store} />).dive().dive();
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component.length).toBe(1);
        });
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component.length).toBe(1);
        });

    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box');
            expect(component.length).toBe(0);
        });
        test('does not renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button');
            expect(component.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('guessWord action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        const mockProps = {
            guessWord: guessWordMock,
        };
        wrapper = shallow(
            <UnconnectedInput {...mockProps} />
        );
        wrapper.setState({ currentGuess: guessedWord });
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { value: guessedWord, preventDefault(){} });
    });
    test('guessWord runs when submit button clicked', () => {
        const guessWordMockCallCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument' , () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0];
        expect(guessedWordArg).toBe(guessedWord);
    });
    test('input box clears on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('')
    });
});
