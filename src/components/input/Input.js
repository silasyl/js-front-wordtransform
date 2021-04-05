import React, { Component } from 'react';

export default class Input extends Component {
  handleTextChange = (event) => {
    const newText = event.target.value;

    this.props.onTextChange(newText);
  };

  render() {
    const { userInput } = this.props;

    return (
      <div>
        <input
          placeholder="Digite aqui"
          type="text"
          value={userInput}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}
