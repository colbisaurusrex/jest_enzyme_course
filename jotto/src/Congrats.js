import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered component (or null if `success props is falsy`)
 */

const Congrats = (props) => {
    return (
        <div data-test="component-congrats">
            {props.success &&
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            }
        </div>
    );
};

export default Congrats;