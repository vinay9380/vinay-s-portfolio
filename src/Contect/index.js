import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './styles.css';

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.current.checkValidity()) {
            form.current.reportValidity();
            return;
        }

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('EmailJS Result:', result);
            
            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            form.current.reset();
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: error.text || 'Oops! Something went wrong. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out via any of the methods below!</p>
            
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="from_name">Name:</label>
                    <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        required
                        className="form-control"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="reply_to">Email:</label>
                    <input
                        type="email"
                        id="reply_to"
                        name="reply_to"
                        required
                        className="form-control"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="form-control"
                    ></textarea>
                </div>
                
                <button type="submit" disabled={loading} className={loading ? 'loading' : ''}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                    <div className={`status-message ${status.type}`}>
                        {status.message}
                    </div>
                )}
            </form>
            
            <div className="contact-info">
                <h3>Other Ways to Reach Me</h3>
                <div className="contact-links">
                    <p>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:vinaysinghb5856@gmail.com" className="contect-info-link">
                            vinaysinghb5856@gmail.com
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-linkedin"></i>
                        <a 
                            href="https://www.linkedin.com/in/vinay-singh-a6214123a" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contect-info-link"
                        >
                            LinkedIn Profile
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-github"></i>
                        <a 
                            href="https://github.com/vinay9380" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contect-info-link"
                        >
                            GitHub Profile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
