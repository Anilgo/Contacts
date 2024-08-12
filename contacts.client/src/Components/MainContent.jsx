import React, { useEffect, useState } from 'react';
import './MainContent.css';
import ContactDetails from './ContactDetails';

const MainContent = ({ searchTerm }) => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        populateContactData();
    }, []);

    const populateContactData = async () => {
        try {
            const response = await fetch('/api/contacts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        }
    };

    const filteredContacts = searchTerm
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : contacts;

    if (selectedContact) {
        return <ContactDetails contact={selectedContact} onBack={() => setSelectedContact(null)} />;
    }

    return (
        <div className="main-content">
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map(contact => (
                        <tr key={contact.email} onClick={() => setSelectedContact(contact)}>
                            <td>{contact.name}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                            <td>{contact.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MainContent;
