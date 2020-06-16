import React from 'react';
import Dutton from 'react-bootstrap/Button';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {}

  _generateRandomPokemon() {
    // return random logic
  }

  _handleClick() {
    // handle clicking functionality
  }

  render() {
    const { isClicked } = this.state;
    return getAppContent(isClicked, this._handleClick);
  }
}

function getAppContent(handleClick) {
  return (
    <div>
      <Dutton id="clap" className="poke_button" onClick={handleClick}>
        <h1>Add Pokemon</h1>
      </Dutton>
    </div>
  );
}

export default Button;
