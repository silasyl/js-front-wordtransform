import React, { Component } from 'react';
import Output from './Output';

export default class Outputs extends Component {
  render() {
    const { userInput } = this.props;

    return (
      <div>
        <h2>Transformações</h2>
        <span>Texto invertido:</span>
        <div>
          <Output textInput={userInput} transformation="1" />
          <button onClick={this.handleCopy}>Copy text</button>
        </div>
        <span>Texto numérico:</span>
        <div>
          <Output textInput={userInput} transformation="2" />
        </div>
        <span>csv:</span>
        <div>
          <Output textInput={userInput} transformation="3" />
        </div>
        <span>slug:</span>
        <div>
          <Output textInput={userInput} transformation="4" />
        </div>
        <span>Somente vogais:</span>
        <div>
          <Output textInput={userInput} transformation="5" />
        </div>
        <span>Somente consoantes:</span>
        <div>
          <Output textInput={userInput} transformation="6" />
        </div>
        <span>variável:</span>
        <div>
          <Output textInput={userInput} transformation="7" />
        </div>
      </div>
    );
  }
}
