import React, { Component } from 'react';

export default class Output extends Component {
  handleOutput = (textInput, type) => {
    let textOutput;
    switch (type) {
      case '1':
        textOutput = textInput.split('').reverse().join('');
        return textOutput;
      case '2':
        textOutput = textInput
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toUpperCase()
          .split('')
          .map((element) => {
            let changed = element;
            if (element === 'O') changed = '0';
            if (element === 'L') changed = '1';
            if (element === 'E') changed = '3';
            if (element === 'A') changed = '4';
            if (element === 'S') changed = '5';
            if (element === 'T') changed = '7';
            return changed;
          })
          .join('');
        return textOutput;
      case '3':
        textOutput = textInput
          .split(' ')
          .map((word) => {
            return `"${word}"`;
          })
          .join(' ')
          .split('')
          .map((char) => {
            if (char === ' ') return ';';
            return char;
          })
          .join('');
        return textOutput;
      case '4':
        textOutput = textInput
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .split('')
          .map((char) => {
            if (char === ' ') return '-';
            return char;
          })
          .join('');
        return textOutput;
      case '5':
        textOutput = textInput
          .split('')
          .filter((char) => {
            const modifiedChar = char
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');
            if (
              modifiedChar === 'a' ||
              modifiedChar === 'e' ||
              modifiedChar === 'i' ||
              modifiedChar === 'o' ||
              modifiedChar === 'u' ||
              modifiedChar === ' '
            ) {
              return true;
            } else {
              return false;
            }
          })
          .join('');
        return textOutput;
      case '6':
        textOutput = textInput
          .split('')
          .filter((char) => {
            const modifiedChar = char
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '');
            if (
              modifiedChar !== 'a' &&
              modifiedChar !== 'e' &&
              modifiedChar !== 'i' &&
              modifiedChar !== 'o' &&
              modifiedChar !== 'u'
            ) {
              return true;
            } else {
              return false;
            }
          })
          .join('');
        return textOutput;
      default:
        textOutput = textInput
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .split(' ')
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join('');
        const text = textOutput.charAt(0).toLowerCase() + textOutput.slice(1);
        return text;
    }
  };

  render() {
    const { textInput, transformation } = this.props;

    return (
      <div>
        <input
          type="text"
          value={this.handleOutput(textInput, transformation)}
          readOnly
        />
      </div>
    );
  }
}
