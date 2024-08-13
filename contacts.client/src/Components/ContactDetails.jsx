import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const contact = location.state?.contact || {
        name: "John Doe",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com",
        company: "Example Inc."
    };

    const handleBack = () => {
        navigate('/');
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${contact.name}?`);
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch('/api/contacts', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([contact]),
            });

            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to delete contact');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                <button type="button">Placeholder</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
};

export default ContactDetails;
