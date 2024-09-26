import React from "react";
import './styles.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out via any of the methods below!</p>
            
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
            
            <div className="contact-info">
                <h3>Other Ways to Reach Me</h3>
                <p>Email: <a href="mailto:your-email@example.com" className="contect-info-link">vinaysinghb5856@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/vinay-singh-a6214123a" target="_blank" rel="noopener noreferrer" className="contect-info-link">linkedin</a></p>
                <p>GitHub: <a href="https:github.com/vinay9380" target="_blank" rel="noopener noreferrer" className="contect-info-link">github</a></p>
            </div>
        </div>
    );
}

export default Contact;
