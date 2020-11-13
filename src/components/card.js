import React from "react"
import PropTypes from "prop-types"
import Button from "./button.js"

import "./card.css"
import "../styles/global.css"

const data = [
    {
        question: "",
        choice : {
            text: "",
            value:""            
        },
        choice : {
            text: "",
            value:"",
        }
    }
]

class Card extends React.Component{

    turnCard = () => {

    }

    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                <Button text={this.props.choice1} value='a' />
                <Button text={this.props.choice2} value='b' />
            </div>
        );
    }
}

Card.defaultProps = {
    text: 'Default text',
    choice1: 'choice1',
    choice2: 'choice2',
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  choice1: PropTypes.string.isRequired,
  choice2: PropTypes.string.isRequired,
}

export default Card
