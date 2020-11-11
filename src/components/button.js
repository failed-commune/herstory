import React from "react"
import PropTypes from "prop-types"

import "../styles/global.css"


function Button({ text }) {

    const state = {
        count: 0
    }
    const add = () => {
        // this.setState = 1;
    }

  return (
    <div>
          <button onClick={add}>{state.count}{text}</button>
    </div>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
