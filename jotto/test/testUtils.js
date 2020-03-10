import checkPropTypes from 'check-prop-types';

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