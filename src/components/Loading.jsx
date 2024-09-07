import React from 'react';
import "../cssfolder/Loading.css";

const Loading = () => {
    return (
        <div className="loader-container">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
}

export default Loading;
