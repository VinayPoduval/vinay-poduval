import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <>
            <h1>Get in Touch?</h1>
            <p className="p-contact">Here are a few ways to reach me..</p>
            <div className="contact-container">
                <a 
                    href="https://github.com/VinayPoduval" 
                    target="_blank"
                    rel="noreferrer"
                    className="a-contact"  
                >
                    <img className="contact-img" src="/images/git.jpg" alt="Git"/>
                </a>
                <a 
                    href="https://www.linkedin.com/in/vinay-poduval/" 
                    target="_blank"
                    rel="noreferrer"
                    className="a-contact"
                >
                    <img className="contact-img" src="/images/linkedin.png" alt="Linkedin"/>
                </a>
                <a 
                    href="mailto:vinaypoduval@hotmail.com"
                    className="a-contact"
                >
                    <img className="contact-img" src="/images/mail.jpg" alt="Mail"/>
                </a>
                <a
                    className="a-contact"
                    href="tel:+919168902209"
                >
                    <img className="contact-img" src="/images/phone.jpg" alt="Phone"/>
                </a> 
            </div>
        </>
    );
}

export default Contact;