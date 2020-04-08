import React from 'react';

class HelloWorld extends React.Component {
  state = { who: '' };
  handleClick = (e) => {
    this.setState({ who: e.target.name });
  };
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleClick} name="World">
          World
        </button>
        <button onClick={this.handleClick} name="Friend">
          Friend
        </button>
        <button onClick={this.handleClick} name="React">
          React
        </button>
      </div>
    );
  }
}

export default HelloWorld;
