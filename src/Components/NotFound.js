import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from "../Images/404.jpg";

const NotFound = () => {
  return (

    <div id='error'>
        <img src={ErrorImg} alt="404 ERROR" id='errorimg'/>
        <h2>OOPS ! PAGE NOT FOUND - 404</h2>   
        <Link to="/" id="link">Go To Homepage</Link>
        
    </div>
    

  )
}

export default NotFound