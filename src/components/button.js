import React from "react"
import PropTypes from "prop-types"

import "../styles/global.css"

class Button extends React.Component {
    state = {
        answer: ''
    };
    
  add = () => {
    this.setState(current => ({ answer: current.answer + this.props.value }));
  };
 
  render() {
    return (
      <div>
          <button onClick={this.add}>{this.state.answer}{this.props.text}</button>
      </div>
    );
  }

};

Button.defaultProps = {
    text: 'Default text',
    value:'Default value',
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}



export default Button