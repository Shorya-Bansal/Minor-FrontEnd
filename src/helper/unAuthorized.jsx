import React from 'react';


import "../css/authorization.css";
import errorImage from "../images/error-image.jpg"

function Authorization(params) {
    return (
        <div>
            <div className="authorized-body">
                <img src={errorImage} className="error-image" alt="UnAuthorized User"></img>
            </div>
        </div>
    )
}

export default Authorization;