import React from 'react';
import NotFoundImage from '../assets/NotFoundImage.jpg';

const NotFound = (props) => {
    console.log(props)
    return (
        <div className="main">
        <h1>{props.location.state.msg}</h1>
        <img src={NotFoundImage} alt="Page Not Found"/>
        </div>
    )
}

export default NotFound;