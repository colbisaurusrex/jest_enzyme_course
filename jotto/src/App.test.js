import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState ={}) => {
    const store = storeFactory(initialState)
    return shallow(<App store={store} />).dive().dive();
};


describe('redux properties', () => {
    test('has access to `success` state', () => {
      const success = true;
      const wrapper = setup({ success });
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success);
    });
    test('has access to `secretWord` state', () => {
      const secretWord = 'party';
      const wrapper = setup({ secretWord });
      const secretWordProp = wrapper.instance().props.secretWord;
      expect(secretWordProp).toBe(secretWord);
    });
    test('has access to `guessedWords` state', () => {
      const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
      const wrapper = setup({ guessedWords });
      const guessedWordsProp = wrapper.instance().props.guessedWords;
      expect(guessedWordsProp).toEqual(guessedWords);
    });
    test('`getSecretWord` action creator is a function on the props', () => {
      const wrapper = setup();
      const getSecretWordProp = wrapper.instance().props.getSecretWord;
      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });

test('getSecretWord runs on App mount', () => {
    const getSecretWordMock = jest.fn();
    // set up app componenent with getSecretWordMock as getSecretWord prop
    const mockProps = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: [],
    };
    const wrapper = shallow(
        <UnconnectedApp {...mockProps} />
    );
    // run lifecycle method
    wrapper.instance().componentDidMount();
    // check if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
});