import React, { Component } from 'react';
import ConsentsApp from './ConsentsApp';
import QuestionsApp from './QuestionsApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Please refresh the page to see the dynamic behaviour</h1>
        <h3>Play with data from line 88 onwards in "rm-prototype/src/QuestionsApp/index.js". Add/Remove/Edit choices. Randomize consent API data </h3>
        <h3>I am altering the API responses randomly so that You can only see what you get from API</h3>

        <hr />
        <ConsentsApp />
        <hr />
        <QuestionsApp />
      </div>
    );
  }
}

export default App;
