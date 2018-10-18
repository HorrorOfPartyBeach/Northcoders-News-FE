import React from 'react';
import PropTypes from 'prop-types'; 

function Button (props) {
    console.log(props)
    return <button className="navButtons" {...props}>{props.text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
} 

export default Button;