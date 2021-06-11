import React from "react"/* 
import { useHistory } from "react-router-dom"; */

function Help() {/* 
    const history = useHistory(); */
    const handleClick = () => {
        window.location = "/";
    }
    return <div>
        <h1>Need Help..</h1>
        <button className="btn btn-primary" onClick={handleClick}>Back</button>
    </div>;
}

export default Help;
