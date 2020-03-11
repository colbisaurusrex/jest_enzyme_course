import checkPropTypes from 'check-prop-types';
import { createStore } from'redux';

import rootReducer from '../src/reducers';

/**
 * Creates a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-set value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
  }

/**
 * Return result of prop check assertion
 * @function
 * @param {ShallowWrapper} component - Enzyme shallow wrapper to search within
 * @param {object} - conformingProps - React props
 * @return {boolean}
 */

 export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
 }