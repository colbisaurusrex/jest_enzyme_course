import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);
        this.state = { currentGuess: null };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;
        if(guessedWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord);
        };
        this.setState({ currentGuess: '' })
    }

    render() {
        const contents = this.props.success
        ? null
        : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="enter guess"
                    value={this.state.currentGuess}
                    onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    const { success } = state;
    return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);