import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    const contact = {
        name: "John Doe",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com",
        company: "Example Inc."
    };

    return (
        <div className="contact-details">
            <h2>Contact Details</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" value={contact.name} readOnly />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={contact.phoneNumber} readOnly />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={contact.email} readOnly />
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" value={contact.company} readOnly />
                </div>
                <button type="button" onClick={handleBack}>Back to Contacts</button>
            </form>
        </div>
    );
};

export default ContactDetails;
