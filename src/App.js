import React, { Component } from 'react';
import Input from './components/input/Input';
import Outputs from './components/output/Outputs';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
    };
  }

  handleInputChange = (newText) => {
    this.setState({
      userInput: newText,
    });
  };

  render() {
    const { userInput } = this.state;

    return (
      <div>
        <h1>React Text Transformer</h1>
        <span>Digite um texto qualquer:</span>
        <Input userInput={userInput} onTextChange={this.handleInputChange} />
        <Outputs userInput={userInput} />
      </div>
    );
  }
}
