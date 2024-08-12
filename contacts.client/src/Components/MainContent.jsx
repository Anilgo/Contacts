import React, { useEffect, useState } from 'react';
import './MainContent.css';
import ContactDetails from './ContactDetails';

const MainContent = ({ searchTerm }) => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [selectedContacts, setSelectedContacts] = useState([]);

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

    const handleSelectContact = (contact) => {
        setSelectedContacts(prevSelected => {
            if (prevSelected.includes(contact)) {
                return prevSelected.filter(c => c !== contact);
            } else {
                return [...prevSelected, contact];
            }
        });
    };

    const handleDeleteSelected = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete the selected contacts?');
        if (confirmDelete) {
            const remainingContacts = contacts.filter(contact => !selectedContacts.includes(contact));
            setContacts(remainingContacts);
            setSelectedContacts([]);
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
            {selectedContacts.length > 0 && (
                <button className="delete-button" onClick={handleDeleteSelected}>
                    Delete Selected
                </button>
            )}
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
                        <tr key={contact.email}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedContacts.includes(contact)}
                                    onChange={() => handleSelectContact(contact)}
                                    className="select-checkbox"
                                />
                                <span onClick={() => setSelectedContact(contact)}>{contact.name}</span>
                            </td>
                            <td onClick={() => setSelectedContact(contact)}>{contact.phoneNumber}</td>
                            <td onClick={() => setSelectedContact(contact)}>{contact.email}</td>
                            <td onClick={() => setSelectedContact(contact)}>{contact.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MainContent;
