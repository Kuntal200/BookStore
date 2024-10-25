import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            // Send the form data to the backend
            const response = await fetch('http://localhost:3001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Optionally handle the response
                alert('Message sent successfully!');
                // Redirect to the homepage after submission
                navigate('/');
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while sending your message.');
        }
    };

    return (
        <div className="flex flex-col items-center mt-4 p-8 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 text-center mb-6">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-3 mb-4 border rounded-md border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 mb-4 border rounded-md border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-3 h-32 border rounded-md border-gray-300 text-white resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit" 
                    className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
