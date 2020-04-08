import React from 'react';

class Bomb extends React.Component {
  state = { count: 0 };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tickTock = () => {
    if (this.state.count % 2) {
      return 'tick..';
    }
    if (this.state.count >= 8) {
      clearInterval(this.interval);
      return 'BOOM!';
    } else {
      return 'tock...';
    }
  };
  render() {
    return (
      <div>
        <p>{this.tickTock()}</p>
      </div>
    );
  }
}

export default Bomb;
