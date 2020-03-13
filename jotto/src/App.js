import React, { Component } from 'react';

import GuessedWords from './GuessedWords';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input />
        <GuessedWords
          guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3 }
          ]}
        />
      </div>
    );
  }
}

export default App;
