import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
    return(
        <>
            <h1>About Me</h1>
            <div className="main-container">
                <div className="content">
                    <div className="content-item">
                        <img className="me-img" src="/images/me.jpg" alt="Vinay"/>
                    </div>
                    <div className="content-item">
                        <p className="abt-desc">Hi, I am Vinay Poduval. I am a Computer Science Engineering Graduate
                        aspiring to be a Web Developer. Feel free to contact me to discuss 
                        opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default Home;