import React from 'react';
import './Resume.css';

function Resume() {
    return(
        <>
        <h1>Download My Resume here</h1>
        <div className="resume-container">
            <p className="p-resume">Click on the button below to download</p>
            <button className="resume-btn">Download</button>
        </div>
        </>
    );
};

export default Resume;