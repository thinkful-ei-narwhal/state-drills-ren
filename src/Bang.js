import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = { bulletInChamber: 8 };
  state = { chamber: null, spinningTheChamber: false };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  renderTxt = () => {
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger...';
    }
    if (this.props.bulletInChamber === this.state.chamber) {
      return 'BANG!!!!';
    } else {
      return 'You are safe!!';
    }
  };

  handleClick = (e) => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      let bulletCheck = Math.ceil(Math.random() * 8);
      this.setState({ chamber: bulletCheck, spinningTheChamber: false });
    }, 2000);
  };

  render() {
    return (
      <div>
        <p>{this.renderTxt()}</p>
        <button onClick={this.handleClick}>
          Pull the Trigger... if you dare!
        </button>
      </div>
    );
  }
}
export default RouletteGun;
