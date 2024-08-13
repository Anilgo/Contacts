import React, { useState } from 'react';
import './ContactDetails.css';

const CreateContact = () => {
    const [contact, setContact] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        if (response.ok) {
            alert('Contact created successfully!');
            setContact({ name: '', phoneNumber: '', email: '', company: '' });
        } else {
            alert('Failed to create contact.');
        }
    };

    return (
        <div className="contact-details">
            <h2>Create Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={contact.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={contact.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" name="company" value={contact.company} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateContact;