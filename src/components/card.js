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

    
function Card({ text, choice1, choice2 }) {

  return (
    <div>
        <h2>{text}</h2>
        <Button text = {choice1}/>
        <Button text = {choice2}/>
    </div>
  )
}


Card.propTypes = {
  text: PropTypes.string.isRequired,
  choice1: PropTypes.string.isRequired,
  choice2: PropTypes.string.isRequired,
}

export default Card
