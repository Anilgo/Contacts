import React, { useEffect, useState } from 'react';
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
    const [editMode, setEditMode] = useState(false);
    const handleBack = () => {
        navigate('/');
    };
    const [contactToEdit, setContactToEdit] = useState(contact);

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
    const handleEdit = () => { setEditMode(!editMode) };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactToEdit(prevState => ({
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
            body: JSON.stringify(contactToEdit)
        });
        if (response.ok) {
            alert('Contact created successfully!');
            //setContactToEdit({ name: '', phoneNumber: '', email: '', company: '' });
        } else {
            alert('Failed to create contact.');
        }
    };

    if (editMode == false)
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
                    <button type="button" onClick={handleEdit}>Edit Contact</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </form>
            </div>
        );
    else
        return (
            <div className="contact-details">
                <h2>Edit Contact</h2>
                <form >
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={contactToEdit.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={contactToEdit.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={contactToEdit.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Company:</label>
                        <input type="text" name="company" value={contactToEdit.company} onChange={handleChange} />
                    </div>
                    <button type="button" onClick={handleBack}>Back to Contacts</button>
                    <button type="button" onClick={handleSubmit}>Apply</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </form>
            </div>
        );
};

export default ContactDetails;
